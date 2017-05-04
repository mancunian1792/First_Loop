# First_Loop
First Loopback project with React in the view Layer and run using webpack dev server

# Steps to run this project :


This guide was prepared on a machine with the following configuration:

* Ubuntu 16.04(min)
* Nodejs(Recommended v6.2.1 or v6.6.0)  
* Postgresql 9.5  

#  Create the postgres user and grant access to the database:  
  1. CREATE USER pguser WITH PASSWORD 'pgpass';
  2. CREATE DATABASE "<Database Name>";
  3. GRANT ALL PRIVILEGES ON DATABASE "<Database Name>" to pguser;

# Do the following using node package manager -- that you get when you install node js
#####One time installation
* Install strongloop  
  npm install -g strongloop
* Install bower  
  npm install -g bower
* Install gulp  
  npm install -g gulp

# Modify the datasources.json file to refer to the database that you create above.

##### To create models in loopback use the following commands -- Models are indirectly the tables that you want to create in database

slc loopback:model

Follow the steps that the command line editor prompts.
###Product Installation steps  
* Install node modules  
  npm install  -- Will install all the modules mentioned in package.json
* Install bower components   -- Beautify components.
  bower install -- will install all the modules mentioned in bower.json

###Database autoupdate
* npm run autoupdate -- this will make use of the model-config.json and create new tables in the database mentioned in datasources.json.




######Run the server:
npm start or gulp

######Open the browser and hit:
http://localhost:3001 (proxy to webpack dev server)
