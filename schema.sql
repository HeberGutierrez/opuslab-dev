DROP DATABASE IF EXISTS recipes;

CREATE DATABASE opus;

USE opus;

CREATE TABLE list (
  id int NOT NULL AUTO_INCREMENT,
  url nvarchar(500) NOT NULL,
  name varchar(50) NOT NULL,
  PRIMARY KEY (ID)
  name varchar(50) NOT NULL,
  companyName varchar(50) NOT NULL,
  description varchar(50) NOT NULL,
  dateDue varchar(50) NOT NULL,
  phone int(10) NOT NULL,
  email varchar(50) NOT NULL
);
