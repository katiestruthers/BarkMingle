SELECT swipes.swiped_user_id
FROM users
JOIN swipes
ON users.id = swipes.swiped_by_user_id
WHERE is_liked
AND users.id = $1;