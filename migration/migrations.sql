CREATE DATABASE friendFinder;
USE friendFinder;

CREATE TABLE questions (
  id int AUTO_INCREMENT,
  question varchar(1000) NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO questions (question) VALUES ("Your mind is always buzzing with unexplored ideas and plans.");
INSERT INTO questions (question) VALUES ("Generally speaking, you rely more on your experience than your imagination.");
INSERT INTO questions (question) VALUES ("You find it easy to stay relaxed and focused even when there is some pressure.");
INSERT INTO questions (question) VALUES ("You rarely do something just out of sheer curiosity.");
INSERT INTO questions (question) VALUES ("People can rarely upset you.");
INSERT INTO questions (question) VALUES ("It is often difficult for you to relate to other people’s feelings.");
INSERT INTO questions (question) VALUES ("In a discussion, truth should be more important than people’s sensitivities.");
INSERT INTO questions (question) VALUES ("You rarely get carried away by fantasies and ideas.");
INSERT INTO questions (question) VALUES ("You think that everyone’s views should be respected regardless of whether they are supported by facts or not.");
INSERT INTO questions (question) VALUES ("You feel more energetic after spending time with a group of people.");

SELECT * FROM questions