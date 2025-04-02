-- SQLite-compatible SQL script

-- Table structure for table `evidence`
DROP TABLE IF EXISTS evidence;

CREATE TABLE evidence (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  item_name TEXT,
  description TEXT
);

insert into evidence (item_name, description) values ('Piece of Paper', 'ISHOULDENCRYPTTHESTATEMENTS:))');

-- Dumping data for table `evidence`
-- (No data was provided in the original dump, so this section is empty)