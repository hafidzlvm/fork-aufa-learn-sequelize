-- Create Users
CREATE ROLE aufa_db WITH LOGIN PASSWORD 'aufa_db';

-- Grant Privileges to User on Databases
GRANT ALL PRIVILEGES ON DATABASE aufa_db TO aufa_db;

-- Connect to the new database
\c aufa_db;

-- Create a new schema and set its owner
CREATE SCHEMA aufa_db AUTHORIZATION aufa_db;