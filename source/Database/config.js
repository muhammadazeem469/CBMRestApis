const mysql = require('mysql')

const dbConnection =  mysql.createConnection ({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'cbmdatabase',
    multipleStatements: true
});

 dbConnection.connect((error) => {
    if (error) {
        if (error.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('Database connection was closed.');
        }
        if (error.code === 'ER_CON_COUNT_ERROR') {
            console.log('Database has too many connections.');
        }
        if (error.code === 'ECONNREFUSED') {
            console.log('Database connection was refused.');
        }
    } else {
        console.log('Database connected');
    }
});

module.exports = dbConnection