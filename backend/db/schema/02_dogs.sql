DROP TABLE IF EXISTS dogs CASCADE;

CREATE TABLE dogs (
  id SERIAL PRIMARY KEY NOT NULL,
  name varchar(50) NOT NULL,
  age int NOT NULL,
  is_neutered boolean NOT NULL,

  -- inspired by https://www.crunchydata.com/blog/enums-vs-check-constraints-in-postgres
  gender text CHECK (gender in ('Male', 'Female')) NOT NULL,
  size text CHECK (size in ('Small', 'Medium', 'Large')) NOT NULL,
  --

  img text,
  user_id int NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);