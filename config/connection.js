// To create the connection to localhost and sequelize 

const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
// Check if JAWSDB_URL environment variable is set (indicating JawsDB MySQL service on Heroku)
// if (process.env.JAWSDB_URL) {

//     // Initialize Sequelize with JawsDB URL
    
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
  sequelize = new Sequelize(
    'z2n0wptcdstbbu2d',
    'b8jc9lt9p70rvzxe',
    'r0mohk99twryyibj',
    {
      host: 'bbj31ma8tye2kagi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      dialect: 'mysql',
      port: 3306
    }
  );
// }

module.exports = sequelize;

/**
 * DB_NAME='z2n0wptcdstbbu2d'
DB_PASSWORD='r0mohk99twryyibj'
DB_USER='b8jc9lt9p70rvzxe'
DB_HOST='bbj31ma8tye2kagi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com'
PORT=3306
 */
