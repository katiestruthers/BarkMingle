DROP TABLE IF EXISTS matches CASCADE;

CREATE TABLE matches (
  id SERIAL PRIMARY KEY NOT NULL,
  time_matched timestamp NOT NULL,
  user_1_id int NOT NULL,
  user_2_id int NOT NULL,
  FOREIGN KEY (user_1_id) REFERENCES users(id),
  FOREIGN KEY (user_2_id) REFERENCES users(id)
);