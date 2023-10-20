const express = require("express");
const bcrypt = require("bcryptjs");
const database = require("../db/connection");

const router = express.Router();


// curl -d '{"first_name":"value1", "last_name":"value2", "email":"a@a.com"}' -H "Content-Type: application/json" -X POST http://localhost:8080/signup


// Create a new user(human)
router.post("/signup", (req, res) => {
  const { email, password, passwordConfirmation } = req.body;

  // Check if password and passwordConfirmation match
  if (password !== passwordConfirmation) {
    return res.status(400).json({ error: "Password and password confirmation do not match" });
  }

  // Hash the user's password
  const hashedPassword = bcrypt.hashSync(password, 12);

  // Insert the user into the database
  database.query(
    "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id", // or * ?
    [email, hashedPassword],
    (error, result) => {
      if (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ error: "Failed to create user" });
      }

      const userId = result.rows[0].id;

      res.json({
        message: "User created successfully",
        user: {
          id: userId,
          email: email,
        },
      });
    }
  );
});



// Create a new dog and associate it with a user
router.post("/signup/dog", (req, res) => {
  const { name, breed, gender, age, size, is_neutered, user_id } = req.body;

  // Check if breed exists in the breeds table
  database.query("SELECT id FROM breeds WHERE name = $1", [breed], (error, result) => {
    if (error) {
      console.error("Error checking breed:", error);
      return res.status(500).json({ error: "Failed to create dog" });
    }

    let breedId = result.rows[0] ? result.rows[0].id : null;

    // If the breed does not exist, insert it into the breeds table
    if (!breedId) {
      database.query(
        "INSERT INTO breeds (name) VALUES ($1) RETURNING id",
        [breed],
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
                    dogId: dogId,
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


// Login route
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Find the user with the provided email
  database.query("SELECT * FROM users WHERE email = $1", [email], (error, result) => {
    if (error) {
      console.error("Error while looking up the user:", error);
      return res.status(500).json({ error: "Login failed" });
    }

    const user = result.rows[0];

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    // Compare the provided password with the hashed password in the database
    if (bcrypt.compareSync(password, user.password)) {
      // Passwords match, user is authenticated
      res.json({
        message: "Login successful",
        user: {
          id: user.id,
          email: user.email,
        },
      });
    } else {
      // Passwords don't match, authentication failed
      res.status(401).json({ error: "Authentication failed" });
    }
  });
});


module.exports = router;
