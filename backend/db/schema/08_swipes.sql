DROP TABLE IF EXISTS swipes CASCADE;

CREATE TABLE swipes (
  id SERIAL PRIMARY KEY NOT NULL,
  swiped_by_user_id int NOT NULL,
  swiped_user_id int NOT NULL,
  is_liked boolean NOT NULL,
  FOREIGN KEY (swiped_by_user_id) REFERENCES users(id),
  FOREIGN KEY (swiped_user_id) REFERENCES users(id)
);