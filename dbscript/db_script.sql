drop database IF EXISTS exam;
create database exam;
use exam;

CREATE TABLE employee_role (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE employees (
    id int NOT NULL AUTO_INCREMENT,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    uuid varchar(255) NOT NULL,
    DOB date,
    emp_role_id int,
    email_id varchar(255) NOT NULL,
    salt varchar(255) ,
    created datetime,
	hash varchar(255) ,
    PRIMARY KEY (id),
	FOREIGN KEY (emp_role_id) REFERENCES employee_role(id)

);

CREATE TABLE  employee_login(
    id int NOT NULL AUTO_INCREMENT,
    emp_id int,
    created datetime,
    PRIMARY KEY (id),
    FOREIGN KEY (emp_id) REFERENCES employees(id)
);

CREATE TABLE  question_type(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
    
);

CREATE TABLE  questions(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    image_url  varchar(255) NOT NULL,
    question_type_id int,
	is_delete bit,
    is_active bit,
    created datetime,
    PRIMARY KEY (id),
    FOREIGN KEY (question_type_id) REFERENCES question_type(id)
);


CREATE TABLE  answers(
    id int NOT NULL AUTO_INCREMENT,
    answers varchar(255) NOT NULL,
    image_url  varchar(255) NOT NULL,
    question_id int,
    iscurrect bit default 0,
    PRIMARY KEY (id),
	FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE  exam_type(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE  exams(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    exam_code varchar(255) NOT NULL,
    exam_uuid varchar(255) NOT NULL,
    noofquestions int,
    timing int,
    is_delete bit,
    is_active bit,
    exam_type_id int,
    iscurrect bit default 0,
    PRIMARY KEY (id),
	FOREIGN KEY (exam_type_id) REFERENCES exam_type(id)
);

CREATE TABLE  exam_questions(
    id int NOT NULL AUTO_INCREMENT,
    exam_id int,
    question_id int,
	PRIMARY KEY (id),
    FOREIGN KEY (exam_id) REFERENCES exams(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
    );

CREATE TABLE student_role (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE students (
    id int NOT NULL AUTO_INCREMENT,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    uuid varchar(255) NOT NULL,
    DOB date,
    student_role_id int,
    email_id varchar(255) NOT NULL,
    salt varchar(255) ,
	hash varchar(255) ,
    phone_no  varchar(255),
    created datetime,
    PRIMARY KEY (id),
	FOREIGN KEY (student_role_id) REFERENCES student_role(id)

);

CREATE TABLE  student_login(
    id int NOT NULL AUTO_INCREMENT,
   student_id int,
    created datetime,
    PRIMARY KEY (id),
    FOREIGN KEY (student_id) REFERENCES students(id)
);


CREATE TABLE  student_answers(
    id int NOT NULL AUTO_INCREMENT,
    student_id int,
    exam_id int,
    question_id int,
    answer int NOT NULL,
    created datetime,
    PRIMARY KEY (id),
    FOREIGN KEY (student_id) REFERENCES students(id),  
	FOREIGN KEY (exam_id) REFERENCES exams(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)

);
insert into employee_role(name)
select 'admin' union all
select 'operator';

insert into student_role(name)
select 'college' union all
select 'instite';

insert into question_type(name)
select 'Open web exam or test' union all
select 'choice questions' 
 


