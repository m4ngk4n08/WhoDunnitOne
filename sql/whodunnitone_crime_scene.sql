CREATE TABLE crime_scene (
    scene_id INT PRIMARY KEY,
    location VARCHAR(100),
    time_discovered TIMESTAMP,
    evidence_found VARCHAR(255)
);

INSERT INTO crime_scene VALUES 
(1, 'Library', '2025-04-02 00:00:00', 'A torn note with strange symbols'),
(2, 'Vault Room', '2025-04-02 00:30:00', 'A broken window and a missing heirloom'),
(3, 'Grand Piano', '2025-04-02 01:00:00', 'A hidden compartment with a note'),
(4, 'Wine Cellar', '2025-04-02 01:30:00', 'A bloodstained cloth'),
(5, 'Ballroom', '2025-04-02 02:00:00', 'A shattered vase and footprints');
