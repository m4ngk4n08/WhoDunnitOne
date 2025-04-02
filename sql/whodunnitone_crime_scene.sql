-- SQLite-compatible SQL script

-- Table structure for table `crime_scene`
DROP TABLE IF EXISTS crime_scene;

CREATE TABLE crime_scene (
  crime_scene_id INTEGER PRIMARY KEY AUTOINCREMENT,
  location TEXT,
  time_discovered TEXT,
  evidence_found TEXT
);

-- Dumping data for table `crime_scene`
-- (No data was provided in the original dump, so this section is empty)