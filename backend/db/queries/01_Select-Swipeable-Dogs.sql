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

-- Do not show logged-in user's dog
WHERE NOT users.id = $1 -- = logged-in user id

-- Do not show dogs the logged-in user has already swiped
AND NOT users.id IN (
  SELECT swipes.swiped_user_id
  FROM users
  JOIN swipes
  ON users.id = swipes.swiped_by_user_id
  WHERE users.id = $1);  -- = logged-in user id