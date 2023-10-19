/* Includes both instances where users are first_liked
   and shown match animation as second_liked. */

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