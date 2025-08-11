CREATE database digital_portfolio;
CREATE table skills(
     Skillid serial Primary key,
     skill_name varchar(50) NOT NULL,
     expierience int NOT NULL
);
CREATE table work_exp(id serial Primary key,
    company_name varchar(100) NOT NULL,
    job_name varchar(100) NOT NULL,
    start_date Date NOT NULL,
    end_date Date,
    explanation1 varchar(255),
    explanation2 varchar(255),
    explanation3 varchar(255)
);
CREATE table projects(
    id serial Primary key,
    project_name varchar(100) NOT NULL,
    project_type varchar(100) NOT NULL,
    my_role varchar(100) NOT NULL,
    summary1 varchar(255),
    summary2 varchar(255),
    summary3 varchar(255),
    git_link varchar(500)
);