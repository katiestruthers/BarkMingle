require('dotenv').config(); // load .env data into process.env
const Express = require('express');
const App = Express();
const PORT = 8080;
const cors = require('cors');


// Express Configuration
App.use(Express.urlencoded({ extended: false }));
App.use(Express.json()); 
App.use(session({
  secret: 'barkmingle', 
  resave: false,
  saveUninitialized: true
}));
App.use(cors());


// Breakdown routes
// const apiRoutes = require("./routes/NAME!!"); // one table
const userRoutes = require('./routes/users'); // 
const dogRoutes = require('./routes/dogs');
const feedRoutes = require('./routes/feed');


// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

// /api/endpoitns
App.use("/api/users", userRoutes); // userRoutes is nested in /signup : /signup is handled by userRoutes
App.use("/api/dogs", dogRoutes); // api for dogs route
App.use("/api/feed", feedRoutes); // api for feed, incl. swipes & matches



App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});