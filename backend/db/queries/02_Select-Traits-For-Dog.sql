SELECT traits.name AS trait
FROM dogs
JOIN dogs_traits
ON dogs.id = dogs_traits.dog_id
JOIN traits
ON dogs_traits.trait_id = traits.id
WHERE dogs.id = $1;