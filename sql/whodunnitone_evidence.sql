CREATE TABLE evidence (
    evidence_id integer PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL
);

INSERT INTO evidence (item_name, description) VALUES
('newspaper', 'newspaper that the culprit sends to you indicating there was a missing heirloom.'),
('shiny marble', 'so shiny it can be sell for a cheap price.'),
('water gun', 'to abolish the fire if the fire is too big.'),
('piece of paper', 'along with the newspaper. There is a piece of paper with a statement that says "did you try to BURN THE PAPER"'),
('katana', 'for safety reasons.'),
('burnt paper', 'burnt paper that left in the library.'),
('axe', 'that can be used to break the vault.'),
('poster', 'a poster the left beside the vault that says "Green is Good!"');
