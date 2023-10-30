SELECT
  dogs.id AS dog_id,
  dogs.name AS dog_name,
  dogs.age AS dog_age, 
  dogs.is_neutered, 
  dogs.gender AS dog_gender, 
  dogs.size AS dog_size, 
  dogs.img AS dog_img,
  breeds.name AS breed, 
  users.id, users.password,
  users.first_name, users.last_name,
  users.bio, users.profile_img
  
FROM dogs
JOIN dogs_breeds
ON dogs.id = dogs_breeds.dog_id
JOIN breeds
ON dogs_breeds.breed_id = breeds.id
JOIN users
ON dogs.user_id = users.id

WHERE users.email = $1;