const express = require("express");
const { addNewSwipe, addNewMatch } = require("./helpers/insert-helpers");
const { getLikesReceivedForUser } = require("./helpers/select-helpers");
const router = express.Router();
const selectHelpers = require("./helpers/select-helpers");
const verifyToken = require("../middlewares/verifyToken");

// Get all swipeable dogs from database
router.get("/dogs", verifyToken, (req, res) => {
  const loggedInUserId = req.user_id; // token id 
  selectHelpers
    .getAllSwipeableDogs(loggedInUserId)
    .then(items => {
      res.json(items);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

// Swipe left or right, updating the swipes table & creating a new match with two mutual likes
router.post("/dogs/:id", verifyToken, (req, res) => {
  const swipedUserId = req.params.id;
  const loggedInUserId = req.user_id; // token id 
  const is_liked = req.body.is_liked;
 
  if (!loggedInUserId) {
    return res.status(401).json({ message: 'User is not logged in.' });
  }

  addNewSwipe(loggedInUserId, swipedUserId, is_liked)
    .then(() => {
      return getLikesReceivedForUser(loggedInUserId);
    })
    .then((likesReceived) => {
      // If it is a match, add to the matches table
      if (likesReceived.includes(Number(swipedUserId))) {
        addNewMatch(loggedInUserId, swipedUserId);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
});

// Get likes received for logged-in user
router.get("/likes", verifyToken, (req, res) => {
  const loggedInUserId = req.user_id; // token id 

  selectHelpers
    .getLikesReceivedForUser(loggedInUserId)
    .then(likes => {
      res.json(likes);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

// Get list of matches for logged-in user
router.get("/matches", (req, res) => {
  const loggedInUserId = req.user_id; // token id 

  selectHelpers
    .getMatchesForUser(loggedInUserId)
    .then(matches => {
      res.json(matches);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

module.exports = router;