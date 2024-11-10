-- Crea la base de dades
CREATE DATABASE jugaripunt;

-- Crea l'usuari
CREATE USER grup2 WITH PASSWORD 'grup2';

-- Atorga permisos a l'usuari
GRANT ALL PRIVILEGES ON DATABASE jugaripunt TO grup2;