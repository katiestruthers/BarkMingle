DROP TABLE IF EXISTS breeds CASCADE;

CREATE TABLE breeds (
  id SERIAL PRIMARY KEY NOT NULL,
  name varchar(50) NOT NULL
);