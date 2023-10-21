const db = require('../db/connection.js');

const getAllSwipeableDogs = function(userId) {
  const queryString = `
    SELECT DISTINCT
      dogs.name AS dog_name,
      dogs.age AS dog_age, 
      dogs.is_neutered, 
      dogs.gender AS dog_gender, 
      dogs.size AS dog_size, 
      breeds.name AS breed, 
      users.first_name, users.last_name,
      users.bio AS user_bio, 
      users.profile_img
    FROM dogs
    JOIN dogs_breeds
    ON dogs.id = dogs_breeds.dog_id
    JOIN breeds
    ON dogs_breeds.breed_id = breeds.id
    JOIN users
    ON dogs.user_id = users.id
    JOIN likes
    ON users.id = likes.liked_by_user_id
    WHERE NOT users.id = $1
    AND NOT users.id IN (
      SELECT swipes.swiped_user_id
      FROM users
      JOIN swipes
      ON users.id = swipes.swiped_by_user_id
      WHERE users.id = $1);
    `;
  const values = [userId];

  return db
    .query(queryString, values)
    .then(data => {
      if (!data.rows.length) {
        return null;
      }
      return data.rows;
    })
    .catch((err) => {
      console.error(err);
    });
};

const createNewUser = function() {};

module.exports = {
  getAllSwipeableDogs
};