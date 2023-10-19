SELECT likes.liked_by_user_id
FROM users
JOIN likes
ON users.id = likes.liked_user_id
WHERE users.id = $1;
