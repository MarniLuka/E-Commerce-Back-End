# E-commerce Back End

## Description
Given a starter code, we had to create the back end for an e-commerce website that uses the latest technologies so that it can compete with other e-commerce companies.

## Installation
Node and Insomnia must first be downloaded and installed on your computer. 

The necessary dependencies are included in the package.json file, so you just need to run 'npm i' in your terminal on the root level of this directory. 

Before running anything, you need to update the .env.EXAMPLE file. First, delete .EXAMPLE from the file name, and then input your MySQL username (can simply be 'root') and password in the proper variables. 

## Usage
Now that the necessary packages are installed, to use this application, you can either create a databse named 'ecommerce_db', or in the db folder, simply 'SOURCE schema.sql' in MySQL. 

After exiting MySQL, you need to run the 'seeds' file to see the mock data. To so do, simple write 'npm run seed' or 'node seeds/index.js' in your termianl. 

Now, you can use Insomnia to use the API routes to get, post, put, and/or delete data in the database you created.

A [demonstration video](https://drive.google.com/file/d/1PIRaP4biVkQSPuJCBDwuwXmKh7Gp-OY8/view) is provided.

## Credits
Starter code was provided by the [GATech Coding Bootcamp](https://github.com/coding-boot-camp/fantastic-umbrella).