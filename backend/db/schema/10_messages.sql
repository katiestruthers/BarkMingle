DROP TABLE IF EXISTS messages CASCADE;

CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  content varchar(500) NOT NULL,
  time_sent timestamp NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) NOT NULL,
  FOREIGN KEY (match_id) REFERENCES matches(id) NOT NULL
);