-- SQLite-compatible SQL script

-- Table structure for table `statement`
DROP TABLE IF EXISTS statement;

CREATE TABLE statement (
  statement_id INTEGER PRIMARY KEY AUTOINCREMENT,
  person_id INTEGER DEFAULT NULL,
  encrypted_text TEXT,
  decrypted_text TEXT
);

-- Dumping data for table `statement`
INSERT INTO statement (statement_id, person_id, encrypted_text, decrypted_text) VALUES
(1, NULL, '*&(HJD7%$$@jdfkHJD', NULL);