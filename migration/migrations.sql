CREATE DATABASE friendFinder;
USE DATABASE friendFinder;

CREATE TABLE questions (
  id int AUTO_INCREMENT,
  question varchar(100) NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO questions (question) VALUES ("");
