const express = require("express");
const database = require("../db/connection");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();
const selectHelpers = require("./helpers/select-helpers");
const { updateDogPhoto }= require("./helpers/update-helpers");


// Get list of all breeds from database
router.get("/breeds", (req, res) => {
  selectHelpers
    .getAllBreeds(req.query)
    .then(items => {
      res.json(items);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});


// Create a new dog and associate it with a logged in user
router.post("/signup", verifyToken, (req, res) => {
  const { name, breed, gender, age, size, is_neutered } = req.body;
  const loggedInUserId = req.user_id;
  
  if (!name || !breed || !gender || !age || !size || is_neutered === undefined || !loggedInUserId) {
    return res.status(400).json({ error: "Please provide all of the info" });
  }

  // Check if breed exists in the breeds table
  database.query("SELECT id FROM breeds WHERE id = $1", [breed], (error, result) => {
    const breedId = result.rows[0].id;
      // If the breed exists, insert the dog into the dogs table
      database.query(
        "INSERT INTO dogs (name, gender, age, size, is_neutered, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id",
        [name, gender, age, size, is_neutered, loggedInUserId],
        (error, result) => {
          if (error) {
            console.error("Error creating dog:", error);
            return res.status(500).json({ error: "Failed to create dog" });
          }
          const dogId = result.rows[0].id;

          // Insert the dog's breed into the dogs_breeds table
          database.query(
            "INSERT INTO dogs_breeds (dog_id, breed_id) VALUES ($1, $2)",
            [dogId, breedId],
            (error, result) => {
              if (error) {
                console.error("Error creating dog-breed association:", error);
                return res.status(500).json({ error: "Failed to create dog" });
              }

              res.json({
                message: "Dog created successfully",
                dogId: dogId
              });
            }
          );
        }
      );
    }
  );
});

// Get list of all traits from database
router.get("/traits", (req, res) => {
  selectHelpers
    .getAllTraits(req.query)
    .then(items => {
      res.json(items);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

// Add traits to a dog's profile 
router.post("/traits", verifyToken, (req, res) => {
  const { traits } = req.body; // Assuming traits is an array of trait IDs
  const loggedInUserId = req.user_id;

  if (!traits || !loggedInUserId) {
    return res.status(400).json({ error: "Please provide the required information" });
  }

  // Check if the dog with the given ID exists => WHERE user_id instead of id to link to the user_id
  database.query("SELECT * FROM dogs WHERE user_id = $1", [loggedInUserId], (error, result) => {
    if (error) {
      console.error("Error checking dog:", error);
      return res.status(500).json({ error: "Failed to add traits" });
    }

    const dog = result.rows[0];

    if (!dog) {
      return res.status(404).json({ error: "Dog not found" });
    }

    // Insert the selected traits into the dogs_traits table
    const insertQueries = traits.map((traitId) => {
      return database.query(
        "INSERT INTO dogs_traits (dog_id, trait_id) VALUES ($1, $2)",
        [dog.id, traitId] // linked to dog id not user id!!!!!!!
      );
    });

    // Execute all the insert queries in parallel
    Promise.all(insertQueries)
      .then(() => {
        res.json({
          message: "Traits added successfully to the dog's profile",
          dogId: dog.id
        });
      })
      .catch((error) => {
        console.error("Error adding traits:", error);
        res.status(500).json({ error: "Failed to add traits" });
      });
  });
});

// Add image of dog
router.post("/images", verifyToken, (req, res) => {
  const loggedInUserId = req.user_id;
  const { img } = req.body;  

  if (!loggedInUserId) {
    return res.status(401).json({ message: 'User is not logged in.' });
  }

  if (!img) {
    return res.status(400).json({ error: "Please provide dog image url." });
  }

  updateDogPhoto(loggedInUserId, img);
});

// Edit dog profile details
router.post("/", verifyToken, (req, res) => {
  const loggedInUserId = req.user_id;
  const { name, breed, gender, age, size, is_neutered } = req.body;
  console.log('req.body:', req.body);

  // if (!name || !breed || !gender || !age || !size || is_neutered === undefined || !loggedInUserId) {
  //   return res.status(400).json({ error: "Please provide all of the info" });
  // }

  const queryString1 = `
    UPDATE dogs
    SET name = $1, gender = $2, age = $3, size = $4, is_neutered = $5
    WHERE id = (
      SELECT id
      FROM dogs
      WHERE user_id = $6)
    RETURNING *;
  `;
  const queryParams1 = [name, gender, age, size, is_neutered, loggedInUserId];

  const queryString2 = `
    UPDATE dogs_breeds
    SET breed_id = $1
    WHERE dog_id = (
      SELECT id
      FROM dogs
      WHERE user_id = $2)
    RETURNING *;
  `;
  const queryParams2 = [breed, loggedInUserId];

  // Execute the query
  database.query(queryString1, queryParams1, (error, result) => {
    console.log('result from query1:', result);
    if (error) {
      console.error("Error updating dog profile:", error);
      return res.status(500).json({ error: "Failed to update dog profile" });
    }

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Dog not found" });
    }
    database.query(queryString2, queryParams2, (error, result) => {
      console.log('result from query2:', result);
      if (error) {
        console.error("Error updating dogs_breeds table:", error);
        return res.status(500).json({ error: "Failed to update dogs_breeds table" });
      }
  
      if (result.rows.length === 0) {
        return res.status(404).json({ error: "dogs_breeds entry not found" });
      }

      selectHelpers
        .getUserDetails(loggedInUserId)
        .then(items => {
          res.json({
            message: "User profile updated successfully",
            userId: req.user_id,
            user: items[0]
          });
      })
    })
  });
});

module.exports = router;
