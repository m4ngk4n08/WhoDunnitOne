CREATE TABLE person_information (
    person_id INT PRIMARY KEY,
    eye_color VARCHAR(50),
    hair_color VARCHAR(50),
    height_cm INT,
    weight_kg INT,
    FOREIGN KEY (person_id) REFERENCES people(person_id)
);

INSERT INTO person_information VALUES 
(1, 'Brown', 'Black', 165, 55),
(2, 'Blue', 'Blonde', 180, 80),
(3, 'Green', 'Brown', 175, 70),
(4, 'Black', 'Black', 168, 60),
(5, 'Brown', 'Red', 160, 50),
(6, 'Grey', 'Bald', 170, 65),
(7, 'Blue', 'Black', 172, 68),
(8, 'Black', 'Brown', 158, 48),
(9, 'Brown', 'Grey', 178, 75);
