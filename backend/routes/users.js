const express = require("express");
const bcrypt = require("bcryptjs");
const database = require("../db/connection");

const router = express.Router();

// // Sample POST route
// router.post('/signup', (req, res) => res.json({
//   message: "SIGNUP IS WORKING!",
//   body: req.body
// }));



// // curl -d '{"email":"a@a.com", "password":"123"}' -H "Content-Type: application/json" -X POST http://localhost:8080/signup
// // api = handling data
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
    }
  );
});




// Login route
router.post("/signin", (req, res) => {
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
    } else {
      // Passwords don't match, authentication failed
      res.status(401).json({ error: "Authentication failed" });
    }
  });
});


module.exports = router;
