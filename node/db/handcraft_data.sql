<<<<<<< HEAD
\c project-collab-db;
=======
>>>>>>> master
INSERT INTO users (username, name, bio, password, type) VALUES ('student1','Marie Bailey','Sadipscing legere ea elaboraret eu usu ea diam .','student', 'student');
INSERT INTO users (username, name, bio, password, type) VALUES ('student2','James Freeman','Sadipscing legere ea elaboraret eu usu ea diam .','student', 'student');
INSERT INTO users (username, name, bio, password, type) VALUES ('student3','Peter Barnes','Sadipscing legere ea elaboraret eu usu ea diam .','student', 'student');
INSERT INTO users (username, name, bio, password, type) VALUES ('company1','Peter Barnes','Sadipscing legere ea elaboraret eu usu ea diam .','student', 'company');
INSERT INTO users (username, name, bio, password, type) VALUES ('admin1','Peter Barnes','Sadipscing legere ea elaboraret eu usu ea diam .','student', 'instructor');

INSERT INTO projects (name, description, project_start_date, status) VALUES ('Google','Iudico ad periculis lorem ipsum . Ipsum vel ullamcorper brute cu sea qui everti enim ex . Periculis autem lorem cum utamur usu ut . Tamquam utamur velit cu offendit ius ius nemore cum amet .','2018-11-25', 'approved');
INSERT INTO projects (name, description, project_start_date, status) VALUES ('Project-Collab','Sea nemore autem ut utamur in enim sadipscing amet . Nemore ut usu reprehendunt autem in diam autem velit elaboraret . Nemore periculis cu ex ullamcorper sit offendit enim . Lorem ipsum cu amet utamur tamquam sadipscing sea . Modus vel modus diam elaboraret ipsum .','2018-11-25', 'approved');
INSERT INTO projects (name, description, project_start_date, status) VALUES ('Snapchat','Periculis sit eu elaboraret eu lorem sit soluta . Nemore eos modus cu lorem enim brute nemore . Eu eos ipsum sea cum vel amet .','2018-11-25', 'approved');
INSERT INTO projects (name, description, project_start_date, status) VALUES ('Facebook','Sea iudico sit eu vel utamur soluta ius . Legere cu sea tamquam sadipscing ius .','2018-11-25', 'unapproved');
INSERT INTO projects (name, description, project_start_date, status) VALUES ('DCS','Erant sea diam ex ea sea ei utamur . Ex diam cum ea velit usu enim ex cum dolor .','2018-11-25', 'unapproved');
INSERT INTO projects (name, description, project_start_date, status) VALUES ('ta_feedback','Lorem ipsum cu reprehendunt modus usu utamur eos ad . Offendit offendit in elaboraret enim autem . Velit nemore reprehendunt elaboraret diam in cum ius eu elaboraret . Ex elaboraret cu enim cum iudico elaboraret sadipscing eu . Offendit modus eu sea eu offendit in .','2018-11-25', 'unapproved');
INSERT INTO projects (name, description, project_start_date, status) VALUES ('PCRS','Enim diam utamur cu ad tamquam . Sadipscing enim vel enim sadipscing enim iudico utamur . Dolor cum brute sea elaboraret sea reprehendunt ei ullamcorper eu .','2018-11-25', 'unapproved');

INSERT INTO user_associations (user_id, project_id, is_admin, status) VALUES (1,1,False,'unapproved');
INSERT INTO user_associations (user_id, project_id, is_admin, status) VALUES (2,2,False,'unapproved');
INSERT INTO user_associations (user_id, project_id, is_admin, status) VALUES (3,3,False,'unapproved');
INSERT INTO user_associations (user_id, project_id, is_admin, status) VALUES (4,4,True,'approved');
-- INSERT INTO user_associations (user_id, project_id, is_admin, status) VALUES (2,5,True,'unapproved');