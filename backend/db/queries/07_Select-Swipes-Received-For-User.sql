-- Includes both likes & rejections

SELECT swipes.swiped_by_user_id
FROM users
JOIN swipes
ON users.id = likes.swiped_user_id
WHERE users.id = $1;