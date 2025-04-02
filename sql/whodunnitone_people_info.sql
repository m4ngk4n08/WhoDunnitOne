-- SQLite-compatible SQL script

-- Table structure for table `people_info`
DROP TABLE IF EXISTS people_info;

CREATE TABLE people_info (
  person_id INTEGER NOT NULL,
  eye_color TEXT DEFAULT NULL,
  hair_color TEXT DEFAULT NULL,
  height_cm INTEGER DEFAULT NULL,
  weight_kg INTEGER DEFAULT NULL,
  PRIMARY KEY (person_id)
);

-- Dumping data for table `people_info`
-- (No data was provided in the original dump, so this section is empty)