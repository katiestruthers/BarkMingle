DROP TABLE IF EXISTS dogs_breeds CASCADE;

CREATE TABLE dogs_breeds (
  id SERIAL PRIMARY KEY NOT NULL,
  dog_id int NOT NULL,
  breed_id int NOT NULL,
  FOREIGN KEY (dog_id) REFERENCES dogs(id),
  FOREIGN KEY (breed_id) REFERENCES breeds(id)
);