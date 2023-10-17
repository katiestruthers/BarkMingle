DROP TABLE IF EXISTS matches CASCADE;

CREATE TABLE matches (
  id SERIAL PRIMARY KEY NOT NULL,
  time_matched timestamp NOT NULL,
  FOREIGN KEY (user_1_id) REFERENCES users(id) NOT NULL,
  FOREIGN KEY (user_2_id) REFERENCES users(id) NOT NULL
);