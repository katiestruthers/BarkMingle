DROP TABLE IF EXISTS dogs_traits CASCADE;

CREATE TABLE dogs_traits (
  id SERIAL PRIMARY KEY NOT NULL,
  dog_id int NOT NULL,
  trait_id int NOT NULL,
  FOREIGN KEY (dog_id) REFERENCES dogs(id),
  FOREIGN KEY (trait_id) REFERENCES traits(id)
);