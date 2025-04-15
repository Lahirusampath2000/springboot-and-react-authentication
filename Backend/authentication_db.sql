drop database authenticationdb;

drop user authentication;

create user authentication with password 'password';

create database authenticationdb with template=template0 owner=authentication

\connect authenticationdb;

alter default privileges grant all on tables to authentication;
alter default privileges grant all on sequences to authentication;

create table et_users(
    user_id integer primary key not null ,
    first_name varchar(20) not null ,
    last_name varchar(20) not null ,
    password text not null
);

