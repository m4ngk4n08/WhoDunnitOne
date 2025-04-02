-- SQLite-compatible SQL script

-- Table structure for table `people`
DROP TABLE IF EXISTS people;

CREATE TABLE people (
  person_id INTEGER PRIMARY KEY,
  full_name TEXT,
  address TEXT
);

-- Dumping data for table `people`
-- (No data was provided in