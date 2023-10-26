const db = require('../../db/connection.js');

// Get all traits
const getAllTraits = function() {
  const queryString = `SELECT * FROM traits;`;

  return db
    .query(queryString)
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

// Get traits for specific dog
const getTraitsForDog = function(dogId) {
  const queryString = `
    SELECT traits.name AS trait
    FROM dogs
    JOIN dogs_traits
    ON dogs.id = dogs_traits.dog_id
    JOIN traits
    ON dogs_traits.trait_id = traits.id
    WHERE dogs.id = $1;
  `;
  const queryParams = [dogId];

  return db
    .query(queryString, queryParams)
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

// Get user PROFILE details (not account details)
const getUserDetails = function(userId) {
  const queryString = `
    SELECT first_name, last_name, bio
    FROM users
    WHERE id = $1;
  `;
  const queryParams = [userId];

  return db
    .query(queryString, queryParams)
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

// Helper function for getAllSwipeableDogs
const combineTraitsForDogs = function(dogs) {
  const promises = [];

  dogs.map((dog) => {
    let promise = getTraitsForDog(dog.dog_id)
      .then((traits) => {
        for (let i = 0; i < traits.length; i++) {
          dog[`trait_${i + 1}`] = traits[i].trait;
        }
        return dog;
      });
    promises.push(promise);
  });

  return Promise.all(promises);
};

// Get all dogs that can appear on a user's fed
const getAllSwipeableDogs = function(userId) {
  const queryString = `
    SELECT DISTINCT
      dogs.id AS dog_id,
      dogs.name AS dog_name,
      dogs.age AS dog_age, 
      dogs.is_neutered, 
      dogs.gender AS dog_gender, 
      dogs.size AS dog_size, 
      dogs.img AS dog_img,
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
  const queryParams = [userId];

  return db
    .query(queryString, queryParams)
    .then(data => {
      if (!data.rows.length) {
        return null;
      }
      const dogs = data.rows;
      return combineTraitsForDogs(dogs);
    })
    .catch((err) => {
      console.error(err);
    });
};

// Get swipes received for user from other users to facilitate matching
const getSwipesReceivedForUser = function(userId) {
  const queryString = `
    SELECT DISTINCT swipes.swiped_by_user_id
    FROM users
    JOIN swipes
    ON users.id = swipes.swiped_user_id
    WHERE is_liked
    AND users.id = $1;
  `;
  const queryParams = [userId];
  
  return db
    .query(queryString, queryParams)
    .then(data => {
      if (!data.rows.length) {
        return null;
      }
      const result = data.rows.map(a => a.swiped_by_user_id);
      return result;
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = {
  getAllTraits,
  getTraitsForDog,
  getUserDetails,
  getAllSwipeableDogs,
  getSwipesReceivedForUser
};