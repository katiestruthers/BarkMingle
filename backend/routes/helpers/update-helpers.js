const db = require('../../db/connection.js');

const updateDogPhoto = function(loggedInUserId, imageUrl) {
  const queryString = `
    UPDATE dogs
    SET img = $1
    WHERE id = $2;
  `;
  const queryParams = [imageUrl, loggedInUserId];

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
  updateDogPhoto,
  updateUserPhoto
};