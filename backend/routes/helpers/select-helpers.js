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
      users.id,
      users.first_name, users.last_name,
      users.bio, users.profile_img
    FROM dogs
    JOIN dogs_breeds
    ON dogs.id = dogs_breeds.dog_id
    JOIN breeds
    ON dogs_breeds.breed_id = breeds.id
    JOIN users
    ON dogs.user_id = users.id
    WHERE NOT users.id = $1
    AND users.id NOT IN (
      SELECT swipes.swiped_user_id
      FROM swipes
      JOIN users
      ON swipes.swiped_by_user_id = users.id
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

// Get likes received for user from other users to facilitate matching
const getLikesReceivedForUser = function(userId) {
  const queryString = `
    SELECT swipes.swiped_by_user_id
    FROM swipes
    JOIN users
    ON swipes.swiped_user_id = users.id
    WHERE is_liked
    AND users.id = $1;
  `;
  const queryParams = [userId];

  return db
    .query(queryString, queryParams)
    .then(data => {
      if (!data.rows.length) {
        return [];
      }
      const likesReceived = data.rows;
      const result = likesReceived.map(a => a.swiped_by_user_id);
      return result;
    })
    .catch((err) => {
      console.error(err);
    });
};

const getMatchesForUser = function(userId) {
  const queryString = `
    SELECT first_liked_user_id AS user_id, time_matched
    FROM matches
    JOIN users
    ON users.id = second_liked_user_id
    WHERE users.id = $1
    UNION
    SELECT second_liked_user_id AS user_id, time_matched
    FROM matches
    JOIN users
    ON users.id = first_liked_user_id
    WHERE users.id = $1;
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

// Get all traits
const getAllBreeds = function() {
  const queryString = `SELECT * FROM breeds;`;

  return db
    .query(queryString)
    .then(data => {
      if (!data.rows.length) {
        return null;
      }
      return data.rows
    })
    .catch((err) => {
      console.error(err);
    });
};

const getUserDetails = function(userId) {
  const queryString = `
    SELECT
      dogs.id AS dog_id,
      dogs.name AS dog_name,
      dogs.age AS dog_age, 
      dogs.is_neutered, 
      dogs.gender AS dog_gender, 
      dogs.size AS dog_size, 
      dogs.img AS dog_img,
      breeds.name AS breed, 
      users.id, users.first_name, 
      users.last_name, users.bio,
      users.profile_img
    FROM dogs
    JOIN dogs_breeds
    ON dogs.id = dogs_breeds.dog_id
    JOIN breeds
    ON dogs_breeds.breed_id = breeds.id
    JOIN users
    ON dogs.user_id = users.id
    WHERE users.id = $1;
  `;
  const queryParams = [userId];

  return db
    .query(queryString, queryParams)
    .then(data => {
      if (!data.rows.length) {
        return null;
      }
      return data.rows
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = {
  getAllTraits,
  getTraitsForDog,
  getAllSwipeableDogs,
  getLikesReceivedForUser,
  getMatchesForUser,
  getAllBreeds,
  getUserDetails
};