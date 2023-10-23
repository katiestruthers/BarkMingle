DROP TABLE IF EXISTS matches CASCADE;

CREATE TABLE matches (
  id SERIAL PRIMARY KEY NOT NULL,
  time_matched timestamp DEFAULT CURRENT_TIMESTAMP,
  first_liked_user_id int NOT NULL,
  second_liked_user_id int NOT NULL,
  FOREIGN KEY (first_liked_user_id) REFERENCES users(id),
  FOREIGN KEY (second_liked_user_id) REFERENCES users(id)
);