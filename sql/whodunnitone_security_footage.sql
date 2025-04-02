-- SQLite-compatible SQL script

-- Table structure for table `security_footage`
DROP TABLE IF EXISTS security_footage;

CREATE TABLE security_footage (
  footage_id INTEGER PRIMARY KEY AUTOINCREMENT,
  person_id INTEGER DEFAULT NULL,
  location TEXT DEFAULT NULL,
  timestamp TEXT DEFAULT NULL
);

-- Dumping data for table `security_footage`
-- (No data was provided in the original dump, so this section is empty)