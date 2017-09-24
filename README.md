# sequelizedBurger

## Overview

 This is a burger logger with MySQL, Node, Express, Handlebars and a Sequelize.


 ## How It Works

 Eat-Da-Burger! is a restaurant app that lets users input the names of burgers ordered by a cutomer.

Whenever a user submits a customer's name and burgers s/he has ordered, app will display the burgers and customer who ordered them on the left side of the page -- waiting to be devoured.

Each order in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.

This app will store every customer and burger they've ordered in a database(mysql)using sequelized, whether devoured or not.

## How To Set Up And Run

Download this repository. 

Open terminal and navigate to the downloaded folder. Run `npm install` in your terminal to install dependencies. 

Open Connection.js file in Config folder and enter your mysql's username and password. 

In db folder, open schema.sql file and copy its sql command. In your mysql workbench, run the schema's command to create required database.

 In your terminal run `node server.js` to start the server. 
 
 Open your browser and  navigate to http://localhost:8080/ to see the example in action. 