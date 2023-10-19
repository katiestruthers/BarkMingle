/* Includes both likes & rejections. 
  Part of 01_Select-Swipable-Dogs.sql to ensure user is not
  seeing dogs they have already swiped. */

SELECT swipes.swiped_user_id
FROM users
JOIN swipes
ON users.id = swipes.swiped_by_user_id
WHERE users.id = $1;