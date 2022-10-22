const dbConnection = require('../Database/config')

const CreateFoundertable = (req, res) => {
    let sql = `DROP TABLE IF EXISTS founders; CREATE TABLE founders(id int AUTO_INCREMENT, FullName VARCHAR(255), Title VARCHAR(255), company_id int not null,foreign key (company_id) references  companies(id) ON DELETE CASCADE, PRIMARY KEY(id))`;    
    dbConnection.query(sql, (err, result) => {
        if(err){
            console.log(err)
            return
        } else {
            console.log(result);
            res.send('Founders table created...');
        } 
    });
};
module.exports = CreateFoundertable