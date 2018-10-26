CREATE DATABASE test;
\c test;
\set ON_ERROR_STOP true
CREATE TABLE IF NOT EXISTS  users  (
     user_id  VARCHAR(50) PRIMARY KEY,
     name  VARCHAR(50) NOT NULL,
     bio  VARCHAR(2000),
     password  VARCHAR(50),
     email  VARCHAR(50),
     photo  VARCHAR(100),
     linked_in  VARCHAR(100),
     github  VARCHAR(100),
     created_at DATE,
     updated_at DATE
);


CREATE TABLE IF NOT EXISTS  projects  (
     project_id SERIAL PRIMARY KEY,
     project_name  VARCHAR(50) UNIQUE,
     description  VARCHAR(2000),
     github  VARCHAR(50),
     url  VARCHAR(50),
     project_start_date  DATE,
     skills_required  VARCHAR(200),
     skills_prefered  VARCHAR(200),
     tags  VARCHAR(200)
);

CREATE TABLE IF NOT EXISTS  user_associations  (
     user_association_id SERIAL PRIMARY KEY,
     user_id  VARCHAR(50),
     project_id INT,
     is_admin  BOOL,
    FOREIGN KEY(user_id) REFERENCES users(user_id),
    FOREIGN KEY(project_id) REFERENCES projects(project_id)
);
