CREATE DATABASE book_inventory;
USE book_inventory;


CREATE TABLE admin (
id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(50),
password VARCHAR(100)
);


INSERT INTO admin (username, password) VALUES ('admin', 'admin123');


CREATE TABLE books (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(100) NOT NULL,
author VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
age INT NOT NULL,
publisher VARCHAR(100),
published_date DATE,
overview TEXT
);