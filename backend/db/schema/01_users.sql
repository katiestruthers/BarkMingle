DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name varchar(50),
  last_name varchar(50),
  email varchar(75) NOT NULL,
  password varchar(75) NOT NULL,
  bio varchar(95),
  profile_img text
);