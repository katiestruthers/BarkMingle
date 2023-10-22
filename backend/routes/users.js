const express = require("express");
const bcrypt = require("bcryptjs");
const database = require("../db/connection");
const router = express.Router();

// curl -d '{"email":"a@a.com", "password":"123"}' -H "Content-Type: application/json" -X POST http://localhost:8080/signup
// Create a new user(human)
router.post("/users/signup", (req, res) => {  // only /signup
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
          email: email
        },
      });

      // Create a new session
      req.session.user_id = user.id;
    }
  );
});

// Login route
router.post("/users/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Please provide all of the info" });
  }

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

      // Create a new session
      req.session.user_id = user.id;
    } else {
      // Passwords don't match, authentication failed
      res.status(401).json({ error: "Authentication failed" });
    }
  });
});

// Update user profile
router.put("/users/:id", (req, res) => {
  const userId = req.params.id;    // id captured from the url
  const { first_name, last_name, bio, profile_img } = req.body;
 
  if (!userId) {
    return res.status(401).json({ message: 'User is not logged in' });
  }

  if (!first_name || !last_name) {
    return res.status(400).json({ error: "First and last name required" });
  }

  // Build the SQL query for updating the user's profile
  const query = `
    UPDATE users
    SET first_name = $1, last_name = $2, bio = $3, profile_img = $4
    WHERE id = $5
    RETURNING id, first_name, last_name, bio, profile_img, email
  `;

  // Execute the query
  database.query(query, [first_name, last_name, bio, profile_img, userId], (error, result) => {
    if (error) {
      console.error("Error updating user profile:", error);
      return res.status(500).json({ error: "Failed to update user profile" });
    }

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const updatedUser = result.rows[0];

    res.json({
      message: "User profile updated successfully",
      user: updatedUser
    });
  });
});

module.exports = router;
