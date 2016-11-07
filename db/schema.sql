-- Create the burgers_db
CREATE DATABASE burgers_db;
-- use the burgers_db.
USE burgers_db;
-- Create a burgers table
CREATE TABLE burgers (
ID INT NOT NULL AUTO_INCREMENT,
Burger_name VARCHAR (100) NOT NULL,
Devoured BOOLEAN NOT NULL DEFAULT 0,
primary key (ID)
);