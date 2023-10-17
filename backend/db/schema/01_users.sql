DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name varchar(50) NOT NULL,
  last_name varchar(50) NOT NULL,
  email varchar(75) NOT NULL,
  password varchar(75) NOT NULL,
  bio varchar(500),
  profile_img url
);