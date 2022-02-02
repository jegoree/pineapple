# Magebit web developer test

This project is a practical test for web developer position. Please note that this is minimum viable product. It can, and should be imporved on many aspects.

Total time spent: +/- 5 days. Yet this indicator can be reduced with experience.
## Local setup

Below are the steps for successfull installation:

1. Create new database, and switch to it

CREATE DATABASES pineapple;
USE pineapple;

2. Create new table with following parameters:

CREATE TABLE subscriptions (
id int NOT NULL AUTO_INCREMENT,
email varchar(255),
dateAdded DATE,
PRIMARY KEY (id)
);

3. Download production.zip and upack it in your web server.
