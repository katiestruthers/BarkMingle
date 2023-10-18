DROP TABLE IF EXISTS likes CASCADE;

CREATE TABLE likes (
  id SERIAL PRIMARY KEY NOT NULL,
  liked_by_user_id int NOT NULL,
  liked_user_id int NOT NULL,
  FOREIGN KEY (liked_by_user_id) REFERENCES users(id),
  FOREIGN KEY (liked_user_id) REFERENCES users(id)
);