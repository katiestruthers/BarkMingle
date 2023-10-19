SELECT images.img
FROM dogs
JOIN images
ON dogs.id = images.dog_id
WHERE dogs.id = $1;
