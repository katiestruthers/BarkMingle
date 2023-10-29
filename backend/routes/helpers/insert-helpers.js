const db = require('../../db/connection.js');

const addNewSwipe = function(loggedInUserId, swipedUserId, is_liked) {
  const queryString = `
    INSERT INTO swipes (swiped_by_user_id, swiped_user_id, is_liked)
    VALUES ($1, $2, $3);
    `;
  const queryParams = [loggedInUserId, swipedUserId, is_liked];

  return db
    .query(queryString, queryParams)
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err);
    });
};

const addNewMatch = function(loggedInUserId, swipedUserId) {
  const queryString = `
    INSERT INTO matches (first_liked_user_id, second_liked_user_id)
    VALUES ($1, $2);
    `;
    
  // Match animation will play for the second_liked_user_id, the currently logged-in user
  const queryParams = [swipedUserId, loggedInUserId];

  return db
    .query(queryString, queryParams)
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  addNewSwipe,
  addNewMatch
};
