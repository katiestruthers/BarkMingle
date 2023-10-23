# Routes

### /api/endpoints
```js
App.use("/api/users", userRoutes); // api for users routes
App.use("/api/dogs", dogRoutes); // api for dogs routes
App.use("api/feed", feedRoutes); // api for feed routes
```


```
Method   | Path               | Purpose

======================================================================
GET      | /                  | Display home screen 

GET      | /signin            | Display login form
POST     | /signin            | Click "Sign In", logging into an existing account

GET      | /signup            | Display account registration screen
POST     | /signup            | Click "Sign Up", creating a new user 

GET      | /users/signup    | Display dog profile screen
POST     | /users/signup    | Click arrow, creating a new dog

GET      | /:dogId/traits     | Display traits screen
PUT      | /:dogId/traits     | Click arrow, assigning 3 traits to dog

GET      | /:userId           | Display user profile screen
PUT      | /:userId           | Click arrow, updating user account details

GET      | /feed/dog/:id      | Display dog on feed
POST     | /feed/dog/:id      | Swipe left or right, updating the swipes table and updating matches table automatically with two mutual likes

GET      | /feed/match/:id    | Display new match screen

Stretch (if we do more than one image per dog):
GET      | /dogs/images       | Display dog images uploading screen
PUT      | /dogs/images       | Click arrow, uploading 1-6 images of dog
```