-- SQLite-compatible SQL script

-- Table structure for table `guest_list`
DROP TABLE IF EXISTS guest_list;

CREATE TABLE guest_list (
  guest_id INTEGER PRIMARY KEY AUTOINCREMENT,
  person_id INTEGER,
  check_in_time TEXT,
  check_out_time TEXT
);

-- Dumping data for table `guest_list`
-- (No data was provided in the original dump, so this section is empty)