CREATE DATABASE "project-collab-db";
\c project-collab-db;
\set ON_ERROR_STOP true
CREATE TABLE IF NOT EXISTS  users  (
     id  VARCHAR(50) PRIMARY KEY,
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
     id SERIAL PRIMARY KEY,
     name  VARCHAR(50) UNIQUE,
     description  VARCHAR(2000),
     github  VARCHAR(50),
     url  VARCHAR(50),
     project_start_date  DATE,
     skills_required  VARCHAR(200),
     skills_prefered  VARCHAR(200),
     tags  VARCHAR(200),
     created_at DATE,
     updated_at DATE
);

CREATE TABLE IF NOT EXISTS  user_associations  (
     id SERIAL PRIMARY KEY,
     user_id  VARCHAR(50),
     project_id INT,
     is_admin  BOOL,
     created_at DATE,
     updated_at DATE,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(project_id) REFERENCES projects(id)
);
