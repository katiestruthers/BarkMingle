# Routes

```
Method   | Path               | Purpose

======================================================================
GET      | /                  | Display home screen 

GET      | /login             | Display login form
POST     | /login             | Click "Sign In", logging into an existing account

GET      | /signup            | Display account registration screen
POST     | /signup            | Click "Sign Up", creating a new user 

GET      | /signup/dog        | Display dog profile screen
POST     | /signup/dog        | Click arrow, creating a new dog

GET      | /signup/traits     | Display traits screen
POST     | /signup/traits     | Click arrow, assigning 3 traits to dog

GET      | /signup/images     | Display dog images uploading screen
POST     | /signup/images     | Click arrow, uploading 1-6 images of dog

GET      | /signup/profile    | Display user profile screen
POST     | /signup/profile    | Click arrow, updating user account details

GET      | /feed/dog/:id      | Display dog on feed
POST     | /feed/dog/:id      | Swipe left or right, updating the swipes table

GET      | /feed/match/:id    | Display new match screen
POST     | /feed/match/:id    | Update matches table automatically with two mutual likes
```