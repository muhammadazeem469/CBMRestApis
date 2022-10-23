const { faker } = require('@faker-js/faker');
const dbConnection =  require('../Database/config');


const fakeData = (req, res) => {

    
    

    let companyObject=[]
    let sqlQuery=""
    let date = faker.date.past(10)
    let formatedDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
   for (let index = 0; index < 25; index++) {
    date = faker.date.past(10)
     companyObject = [
        faker.company.name(),
        faker.address.city(),
        faker.address.state(),
        faker.lorem.paragraph(20),
        `${date.getFullYear()}-${date.getMonth().toString().length === 2 ? date.getMonth(): '0'+date.getMonth() }-${date.getDate().toString().length === 2 ? date.getDate():'0'+date.getDate()}`
     ];
     sqlQuery = 'INSERT INTO companies (CompanyName, City,State, Description, FoundedDate) VALUES ( ?,?,?,?,? )';
        let query = dbConnection.query(sqlQuery, companyObject, (err, result) => {
            if(err){
                console.log(err)
                return
            }
            
        });
        }




        let founderObject=[]
        sqlQuery = 'SELECT id FROM companies';
         dbConnection.query(sqlQuery, (err, result) => {
            if(err){
                console.log(err)
                return
            }
            for (let index = 0; index < result.length; index++) {
                 founderObject = [
                    faker.name.fullName(),
                    faker.name.jobTitle(),
                    result[index].id
               ];
               sqlQuery = 'INSERT INTO founders (FullName, Title,company_id) VALUES ( ?,?,? )';
                 dbConnection.query(sqlQuery, founderObject, (err, result) => {
                    if(err){
                        console.log(err)
                        return
                    }
                    
                });
                
            }
        });
    



    res.status(200).json('Printed')

}


module.exports = {fakeData}