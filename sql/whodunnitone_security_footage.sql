CREATE TABLE security_footage (
    footage_id INT PRIMARY KEY,
    person_id INT,
    location VARCHAR(100),
    timestamp TIMESTAMP,
    FOREIGN KEY (person_id) REFERENCES people(person_id)
);

INSERT INTO security_footage VALUES 
(1, 1, 'Ballroom', '2025-04-01 20:00:00'),
(2, 2, 'Vault Room', '2025-04-01 22:00:00'),
(3, 3, 'Dining Hall', '2025-04-01 21:30:00'),
(4, 4, 'Wine Cellar', '2025-04-01 22:15:00'),
(5, 5, 'Main Hall', '2025-04-01 21:50:00'),
(6, 6, 'Library', '2025-04-01 22:45:00'), -- AJ's last known location
(7, 7, 'Bar', '2025-04-01 23:00:00'),
(8, 8, 'Exit Door', '2025-04-01 22:50:00'),
(9, 9, 'Grand Piano', '2025-04-01 23:30:00'), -- Something is hidden here
(10, 10, 'Kitchen', '2025-04-01 21:00:00'),
(11, 11, 'Vault Room', '2025-04-01 22:30:00'),
(12, 12, 'Garden', '2025-04-01 21:45:00'),
(13, 13, 'Vault Room', '2025-04-01 22:05:00'),
(14, 14, 'Dining Hall', '2025-04-01 21:15:00'),
(15, 15, 'Main Hall', '2025-04-01 20:30:00');