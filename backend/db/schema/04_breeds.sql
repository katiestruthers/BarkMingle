DROP TABLE IF EXISTS breeds CASCADE;

CREATE TABLE breeds (
  id SERIAL PRIMARY KEY NOT NULL,
  name varchar(22) NOT NULL
);