require('dotenv').config(); // load .env data into process.env
const Express = require('express');
const cookieSession = require('cookie-session');
const App = Express();
const PORT = 8080;


// Express Configuration
App.use(Express.urlencoded({ extended: false }));
App.use(Express.json()); 
App.use(cookieSession({
  name: 'session',
  keys: ['sksmsgkftndltekvhrlsmsdjqtdj', 'rjsrkdgkwkgyehgkwkghkdlxldok'],

  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
//App.use(Express.static('public'));

// Breakdown routes
// const apiRoutes = require("./routes/NAME!!"); // one table
const userRoutes = require('./routes/users'); // 
const dogRoutes = require('./routes/dogs');
const feedRoutes = require('./routes/feed');


// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

// /api/endpoints
App.use("/api/users", userRoutes); // userRoutes is nested in /signup : /signup is handled by userRoutes
App.use("/api/dogs", dogRoutes); // api for dogs route
App.use("/api/feed", feedRoutes);



// // curl -d '{"name":"donut", "age":2, "breed":"golden"}' -H "Content-Type: application/json" -X POST http://localhost:8080/signup/dog

// App.post('/signup/dog', (req, res) => res.json({
//   message: "SIGNUP/DOG IS WORKING!",
//   body: req.body.age
// }));


App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});