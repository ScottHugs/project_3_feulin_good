CREATE DATABASE feulin_good;

CREATE TABLE petrol_stations (
  object_id SERIAL PRIMARY KEY,
  featuretype TEXT,
  description TEXT, 
  class TEXT, 
  fid INTEGER, 
  name TEXT,
  operational_status TEXT,
  owner text, 
  industry_id INTEGER, 
  address TEXT, 
  suburb TEXT, 
  state TEXT, 
  spatial_confidence INTEGER,
  revised INTEGER, 
  comment TEXT,
  latitude DECIMAL(15, 12), 
  longitude DECIMAL(15, 12)
); 


COPY petrol_stations
(  object_id,
  featuretype,
  description, 
  class, 
  fid, 
  name,
  operational_status,
  owner, 
  industry_id, 
  address, 
  suburb, 
  state, 
  spatial_confidence,
  revised, 
  comment,
  latitude, 
  longitude)
FROM '/Users/scotthughes/sei/projects/project_3_feulin_good/db/petrol_station_data.csv'
DELIMITER ','
CSV HEADER;
