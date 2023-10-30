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

-- Do not show logged-in user's dog
WHERE NOT users.id = 1 -- = logged-in user id

-- Do not show dogs the logged-in user has already swiped
AND users.id NOT IN (
  SELECT swipes.swiped_by_user_id
  FROM swipes
  JOIN users
  ON swipes.swiped_user_id = users.id
  WHERE users.id = 1);  -- = logged-in user id