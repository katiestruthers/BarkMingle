/* Compare this list each time the user gives a new like.
  If there is a match, swiped_by_user_id will become
  first_liked_user_id on the matches table. */

SELECT swipes.swiped_by_user_id
FROM users
JOIN swipes
ON users.id = likes.swiped_user_id
WHERE is_liked
AND users.id = $1;