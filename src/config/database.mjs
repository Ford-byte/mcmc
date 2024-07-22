// database.mjs
import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect((error) => {
   if (error) {
      console.error('Error connecting to database:', error);
      return;
   }
   console.log('Connection to database successful!');
});

export { connection };
