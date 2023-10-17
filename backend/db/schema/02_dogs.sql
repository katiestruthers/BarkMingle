DROP TABLE IF EXISTS dogs CASCADE;

CREATE TABLE dogs (
  id SERIAL PRIMARY KEY NOT NULL,
  name varchar(50) NOT NULL,
  age int NOT NULL,
  is_neutered boolean NOT NULL,

  -- inspired by https://www.crunchydata.com/blog/enums-vs-check-constraints-in-postgres
  gender text CHECK (gender in ('male', 'female')) NOT NULL,
  size text CHECK (size in ('small', 'medium', 'large')) NOT NULL,
  --

  FOREIGN KEY (user_id) REFERENCES users(id) NOT NULL
);