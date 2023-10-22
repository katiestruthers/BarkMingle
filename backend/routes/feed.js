const express = require("express");
const database = require("../db/connection");
const { addNewSwipe, addNewMatch } = require("./insert-helpers");
const { getSwipesReceivedForUser } = require("./select-helpers");
const router = express.Router();

router.post("/feed/dog/:id", (req, res) => {
  const swipedUserId = req.params.id;
  const loggedInUserId = req.session.user_id;
  const is_liked = req.body.is_liked;
 
  if (!loggedInUserId) {
    return res.status(401).json({ message: 'User is not logged in.' });
  }

  addNewSwipe(swipedUserId, loggedInUserId, is_liked)
    .then((newSwipe) => {
      if (newSwipe) {
        res.json(newSwipe);

        if (getSwipesReceivedForUser(loggedInUserId).includes(swipedUserId)) {
          // Redirect to post request
        }
      } else {
        res.status(404).json({ error: 'Swipe not found.' });
      }
    })

    .catch((err) => {
      console.log(err);
      res.status(500);
    });
});

router.post("/feed/match/:id", (req, res) => {
  const loggedInUserId = req.params.id;
  const swipedUserId = req.session.user_id;

  addNewMatch(swipedUserId, loggedInUserId)
    .then((newMatch) => {
      if (newMatch) {
        res.json(newMatch);
      } else {
        res.status(404).json({ error: 'Match not found.' });
      }
    })

    .catch((err) => {
      console.log(err);
      res.status(500);
    });
});
