# Routes

### /api/endpoints
```js
App.use("/api/users", userRoutes); // api for users routes
App.use("/api/dogs", dogRoutes); // api for dogs routes
App.use("/api/feed", feedRoutes); // api for feed routes
App.use("/api/matches", matchRoutes); // api for match routes
```


```
Method   | Path                        | Action 

======================================================================
POST     | /api/users/signin           | Click "Sign In", logging into an existing account

POST     | /api/users/signup           | Click "Sign Up", creating a new user 

POST     | /api/dogs/:id/signup        | Click arrow, creating a new dog

GET      | /api/dogs/traits            | Get list of all traits from db
PUT      | /api/dogs/:id/traits        | Click arrow, assigning 3 traits to dog

PUT      | /dogs/images                | Click arrow, uploading 1 image of dog

PUT      | /api/users/edit             | Click arrow, updating user account details

GET      | /api/feed/dog               | Get swipeable dog info from db
POST     | /api/feed/dog/:id           | Swipe left or right, updating the swipes table & creating a new match with two mutual likes

GET      | /api/matches/               | Get list of matches for logged-in user from db

Stretch (if we do more than one image per dog):
GET      | /dogs/images       | Display dog images uploading screen
PUT      | /dogs/images       | Click arrow, uploading 1-6 images of dog
```