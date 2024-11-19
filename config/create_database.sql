-- Crea la base de dades
CREATE DATABASE jugaripunt;

-- Crea l'usuari
CREATE USER jugaripunt;

-- Atorga permisos a l'usuari
GRANT ALL PRIVILEGES ON DATABASE jugaripunt TO jugaripunt;

-- Concedeix permisos a l'esquema 'public'
\c jugaripunt
GRANT ALL ON SCHEMA public TO jugaripunt;