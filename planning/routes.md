# Routes

```
Method   | Path               | Purpose

======================================================================
GET      | /                  | Display home screen 

GET      | /users/login       | Display login form
POST     | /users/login       | Click "Sign In", logging into an existing account

GET      | /users/signup      | Display account registration screen
POST     | /users/signup      | Click "Sign Up", creating a new user 

GET      | /dogs/signup       | Display dog profile screen
POST     | /dogs/signup       | Click arrow, creating a new dog

GET      | /dogs/traits       | Display traits screen
POST     | /dogs/traits       | Click arrow, assigning 3 traits to dog

GET      | /dogs/images       | Display dog images uploading screen
POST     | /dogs/images       | Click arrow, uploading 1-6 images of dog

GET      | /users/:id         | Display user profile screen
PUT      | /users/:id         | Click arrow, updating user account details

GET      | /feed/dog/:id      | Display dog on feed
POST     | /feed/dog/:id      | Swipe left or right, updating the swipes table

GET      | /feed/match/:id    | Display new match screen
POST     | /feed/match/:id    | Update matches table automatically with two mutual likes
```