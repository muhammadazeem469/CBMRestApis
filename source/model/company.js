const dbConnection = require('../Database/config')

const CreateCompanytable = (req, res) => {
    let sql = `DROP TABLE IF EXISTS companies; CREATE TABLE companies(id int AUTO_INCREMENT, CompanyName VARCHAR(255), City VARCHAR(255),State VARCHAR(255),Description TEXT, FoundedDate VARCHAR(255), PRIMARY KEY(id))`;    
    dbConnection.query(sql, (err, result) => {
        if(err){
            console.log(err)
            return
        } else {
            console.log(result);
            res.send('Companies table created...');
        } 
    });
};
module.exports = CreateCompanytable