CREATE DATABASE burgers_db;

 use burgers_db;

create table burgers (
	
	id int NOT NULL AUTO_INCREMENT,
	
	burger_name varchar(25) NOT NULL,
    
    devoured BOOLEAN,
    
    date timestamp, 
    
	PRIMARY KEY (id)
    
);
