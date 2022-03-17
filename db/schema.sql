CREATE DATABASE cricket_live;
<<<<<<< HEAD
\c cricket_live

CREATE TABLE users(
    id SERIAL PRIMARY KEY
    name TEXT,
    email TEXT,
    password_digest TEXT
);

CREATE TABLE favourites(
  id SERIAL PRIMARY KEY,
  email TEXT,
  country TEXT,
  tournament TEXT,
  gender TEXT,
  match_type TEXT,
  player TEXT
)
=======
\c cricket_live;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,  
    name TEXT,
    email TEXT,
    password_digest TEXT
);
>>>>>>> 38bbcb0 (login/sessions)
