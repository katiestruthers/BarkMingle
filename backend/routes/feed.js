const express = require("express");
const { addNewSwipe, addNewMatch } = require("./helpers/insert-helpers");
const { getSwipesReceivedForUser } = require("./helpers/select-helpers");
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
router.post("/dogs/:id", (req, res) => {
  const swipedUserId = req.params.id;
  const loggedInUserId = req.session.user_id;
  const is_liked = req.body.is_liked;
 
  if (!loggedInUserId) {
    return res.status(401).json({ message: 'User is not logged in.' });
  }

  addNewSwipe(swipedUserId, loggedInUserId, is_liked)
    .then((newSwipe) => {
      if (newSwipe) {
        const swipesReceived = getSwipesReceivedForUser(loggedInUserId);
        if (!swipesReceived) {
          res.json(newSwipe);
        }
        return swipesReceived;
      } else {
        res.status(404).json({ error: 'Swipe not found.' });
      }
    })
    .then((swipesReceived) => {
      if (swipesReceived.includes(Number(swipedUserId))) {
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

        // Redirect to 'it's a match!' page
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
});

module.exports = router;