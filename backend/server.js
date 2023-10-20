const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;


// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());

// Breakdown routes
// const apiRoutes = require("./routes/NAME!!"); // one table
const userRoutes = require('./routes/signup'); // one table


// /api/endpoitns
App.use("/signup", userRoutes);

// Sample POST route
App.post('/signup', (req, res) => res.json({
  message: "SIGNUP to work!",
  body: req.body
}));

// curl -d '{"name":"donut"}' -H "Content-Type: application/json" -X POST http://localhost:8080/signup/dog

App.post('/signup/dog', (req, res) => res.json({
  message: "SIGNUP/DOG work!",
  body: req.body
}));


App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});