CREATE TABLE evidence (
    evidence_id INT PRIMARY KEY,
    description VARCHAR(255),
    location_found VARCHAR(100)
);

INSERT INTO evidence VALUES 
(1, 'A set of keys with a missing piece', 'Library'),
(2, 'A small note with AJ’s handwriting', 'Library'),
(3, 'A bloodstained glove', 'Near the wine cellar'),
(4, 'A golden locket with initials C.B.', 'Vault Room'),
(5, 'A piece of crumpled paper', 'Grand Piano'),
(6, 'A broken vase', 'Dining Hall'),
(7, 'A torn piece of fabric', 'Ballroom'),
(8, 'A suspicious footprint', 'Garden'),
(9, 'A half-burnt letter', 'Kitchen'),
(10, 'A hidden camera', 'Main Hall');