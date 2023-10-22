const express = require("express");
const bcrypt = require("bcryptjs");
const database = require("../db/connection");

const router = express.Router();

// router.post('/signup/dogs', (req, res) => res.json({
//   message: "SIGNUP IS WORKING!",
//   body: req.body
// }));

// Create a new dog and associate it with a user
router.post("/:userId/signup", (req, res) => {
  const { name, breeds, gender, age, size, is_neutered } = req.body;
  const user_id = req.params.userId;

  if (!name || !breeds || !gender || !age || !size || !is_neutered || !user_id) {
    return res.status(400).json({ error: "Please provide all of the info" });
  }

  // Check if breed exists in the breeds table
  database.query("SELECT id FROM breeds WHERE name = $1", [breeds], (error, result) => {
    if (error) {
      console.error("Error checking breed:", error);
      return res.status(500).json({ error: "Failed to create dog" });
    }

    let breedId = result.rows[0] ? result.rows[0].id : null;

    // If the breed does not exist, insert it into the breeds table
    if (!breedId) {
      database.query(
        "INSERT INTO breeds (name) VALUES ($1) RETURNING id",
        [breeds],
        (error, result) => {
          if (error) {
            console.error("Error creating breed:", error);
            return res.status(500).json({ error: "Failed to create dog" });
          }

          breedId = result.rows[0].id; // Use the newly created breed's ID

          // Insert the dog into the dogs table
          database.query(
            "INSERT INTO dogs (name, gender, age, size, is_neutered, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id",
            [name, gender, age, size, is_neutered, user_id],
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
                    dogName: name
                    //dogId: dogId,
                  });
                }
              );
            }
          );
        }
      );
    } else {
      // If the breed exists, insert the dog into the dogs table
      database.query(
        "INSERT INTO dogs (name, gender, age, size, is_neutered, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id",
        [name, gender, age, size, is_neutered, user_id],
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
                dogId: dogId,
              });
            }
          );
        }
      );
    }
  });
});


// Add traits to a dog's profile
router.put("/:dogId/traits", (req, res) => {
  const { traits } = req.body; // Assuming traits is an array of trait IDs
  const dogId = req.params.dogId;

  if (!traits || !dogId) {
    return res.status(400).json({ error: "Please provide the required information" });
  }

  // Check if the dog with the given ID exists
  database.query("SELECT * FROM dogs WHERE id = $1", [dogId], (error, result) => {
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
        [dogId, traitId]
      );
    });

    // Execute all the insert queries in parallel
    Promise.all(insertQueries)
      .then(() => {
        res.json({
          message: "Traits added successfully to the dog's profile",
          dogId: dogId,
        });
      })
      .catch((error) => {
        console.error("Error adding traits:", error);
        res.status(500).json({ error: "Failed to add traits" });
      });
  });
});

module.exports = router;
