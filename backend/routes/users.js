const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middlewares/verifyToken");
const database = require("../db/connection");
const router = express.Router();
const selectHelpers = require("./helpers/select-helpers");

// Create a new user(human)
router.post("/signup", (req, res) => {  // only /signup
  const { email, password, passwordConfirmation } = req.body;

  if (!email || !password || !passwordConfirmation) {
    return res.status(400).json({ error: "Please provide all of the info" });
  }

  // Check if password and passwordConfirmation match
  if (password !== passwordConfirmation) {
    return res.status(400).json({ error: "Password and password confirmation do not match" });
  }

  // Hash the user's password
  const hashedPassword = bcrypt.hashSync(password, 12);

  // Insert the user into the database
  database.query(
    "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *", // or * ?
    [email, hashedPassword],
    (error, result) => {
      if (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ error: "Failed to create user" });
      }

      const user = result.rows[0];
      delete user.password;
      const token = jwt.sign(user, process.env.JWT_SECRET); // generate token

      res.json({
        message: "User created successfully",
        token,
        userId: req.user_id
      });

    }
  );
});

// Signin route
router.post("/signin", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Please provide all of the info" });
  }

  const queryString = `
    SELECT
      dogs.id AS dog_id,
      dogs.name AS dog_name,
      dogs.age AS dog_age, 
      dogs.is_neutered, 
      dogs.gender AS dog_gender, 
      dogs.size AS dog_size, 
      dogs.img AS dog_img,
      breeds.name AS breed, 
      users.id, users.password,
      users.first_name, users.last_name,
      users.password, users.bio,
      users.profile_img
    FROM dogs
    JOIN dogs_breeds
    ON dogs.id = dogs_breeds.dog_id
    JOIN breeds
    ON dogs_breeds.breed_id = breeds.id
    JOIN users
    ON dogs.user_id = users.id
    WHERE users.email = $1;
  `;
  const queryParams = [email];

  // Find the user with the provided email
  database.query(queryString, queryParams, (error, result) => {
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
      delete user.password;
      const token = jwt.sign(user, process.env.JWT_SECRET);

      res.json({
        message: `Login successful for email: ${email}`,
        token,
        user
      });

    } else {
      // Passwords don't match, authentication failed
      res.status(401).json({ error: "Authentication failed" });
    }
  });
});

// Get logged-in user profile info from database
router.get("/:id", (req, res) => {
  const userId = req.params.id;    // user's id captured from the url

  selectHelpers
    .getUserDetails(userId)
    .then(items => {
      res.json(items);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

// Update logged-in user profile
router.post("/", verifyToken, (req, res) => {
  const loggedInUserId = req.user_id;
  const { first_name, last_name, bio, profile_img } = req.body;
  console.log('Profileuser:', 'req.user_id(token id):', req.user_id);

  // if (Number(userId) !== req.user_id) { // checks the same user is logged in
  //   return res.send("You're not the authourized to modify the user")
  // }

  if (!first_name || !last_name) {
    return res.status(400).json({ error: "First and last name required" });
  }

  // Build the SQL query for updating the user's profile
  const queryString = `
    UPDATE users
    SET first_name = $1, last_name = $2, bio = $3, profile_img = $4,
    WHERE id = $5
    RETURNING *
  `;
  const queryParams = [first_name, last_name, bio, profile_img, loggedInUserId];

  // Execute the query
  database.query(queryString, queryParams, (error, result) => {
    if (error) {
      console.error("Error updating user profile:", error);
      return res.status(500).json({ error: "Failed to update user profile" });
    }

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const updatedUser = result.rows[0];
    // delete updatedUser.password;
    // const token = jwt.sign(updatedUser, process.env.JWT_SECRET);

    res.json({
      message: "User profile updated successfully",
      userId: req.user_id
    });
  });
});

module.exports = router;
