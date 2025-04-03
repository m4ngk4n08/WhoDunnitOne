CREATE TABLE statement (
    statement_id INT PRIMARY KEY,
    person_id INT,
    statement VARCHAR(255),
    FOREIGN KEY (person_id) REFERENCES people(person_id)
);

INSERT INTO statement VALUES 
(1, 1, 'I was in the ballroom all night.'),
(2, 2, 'I saw someone near the vault at 10 PM. I cant seems to identify their identity but i know he has a brown hair and height that maybe 172cm(5.6ft) or 168cm(5.5ft)'),
(3, 3, 'AJ and I had a small talk, nothing serious.'),
(4, 4, 'I swear, I was with Michelle when the heirloom went missing.'),
(5, 5, 'I heard someone whisper about a code near the wine cellar.'),
(6, 6, 'I was in the ballroom all night, sipping wine with the guests.'), -- ENCRYPTED (Needs decryption)
(7, 7, 'Chris Betlog seemed nervous when I asked about AJ.'),
(8, 8, 'Randy left the party early, right?'),
(9, 9, 'I saw AJ Kupal leave something under the grand piano.'),
(10, 10, 'I was in the kitchen preparing snacks.'),
(11, 11, 'I heard a loud crash from the direction of the vault.'),
(12, 12, 'I was in the garden when I heard the commotion.'),
(13, 13, 'I saw Chris Betlog near the vault at 9 PM.'),
(14, 14, 'I was with Michelle when the heirloom went missing.'),
(15, 15, 'I overheard a conversation about a secret passage.');