const dbConnection = require('../Database/config')


 const getAllCompanies = (req, res) => {
   let sql = 'SELECT * FROM companies';
   let query = dbConnection.query(sql, (err, results) => {
       if(err){
         console.log(err)
         return
       }
       res.status(200).json(results)
      
   });

   // res.send('Wellcome List')
};

 const getCompanyById = (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.json('You must enter a valid id as a parameter');
    }
    let sqlQuery = `SELECT * FROM companies WHERE id = ${id}; SELECT * FROM founders WHERE company_id = ${id}` ;
    dbConnection.query(sqlQuery,(error, result) => {
                if(error){
                console.log(error)
                return
                }
            if (result.length === 0) {
                res.status(400).json('No Company Found');
            }   
            
            let resultObject = result[0]
            if(result[0].length){
                const companyObj = {
                id: resultObject[0].id,
                CompanyName: resultObject[0].CompanyName,
                City:resultObject[0].City,
                State:resultObject[0].State,
                Description:resultObject[0].Description,
                FoundedDate:resultObject[0].FoundedDate,
                Founders: result[1],
            }
             res.status(200).json(companyObj)

            }
            
        });        

};

 const createNewCompany = (req, res) => {
   
   let company = req.body
   const companyObj = [
      company.CompanyName,
      company.City,
      company.State,
      company.Description,
      company.FoundedDate
  ];
  console.log(company)
  if (!company.CompanyName || !company.City || !company.Description || !company.State) {
   console.log(!company.CompanyName)
    return res.json({
       ErrorCode: 204,
       Message: 'Fields cannot be empty'
   });
}

   let sqlQuery = 'INSERT INTO companies (CompanyName, City,State, Description, FoundedDate) VALUES ( ?,?,?,?,? )';
   let query = dbConnection.query(sqlQuery, companyObj, (err, result) => {
      if(err){
         console.log(err)
         return
       }
       res.status(200).json(result)
   });

};

 const updateCompany = (req, res) => {
    console.log(req.params,' ', req.body)
    const id = parseInt(req.params.id);
    const company = req.body;
    const companyObj = [
      company.first_name,
      company.last_name,
      company.email,
      company.age
    ];

    if (isNaN(id)) {
        return res.json('You must enter a valid id as a parameter');
    }

    if (!company.CompanyName || !company.Location || !company.Description || !company.FoundedDate) {
        return res.json({
            ErrorCode: 204,
            Message: 'Fields cannot be empty'
        });
    }

    let sqlQuery = `UPDATE companies SET CompanyName = ?, Location = ?, Description = ?, FoundedDate = ? WHERE id = ${id}`

    dbConnection.query(sqlQuery, companyObj,  (error, result) => {
         if(error){
            console.log(error)
            return
         }
        if (result.affectedRow === 0) {
            res.send('No customer was updated');
        }
        res.json(`Customer with id ${id} updated successfully`);
    });
   //res.send('Update Company')
};

 const deleteOneCompany = (req, res) => {

   const id = parseInt(req.params.id);

   if (isNaN(id)) {
       return res.json('You must enter a valid id as a parameter');
   }
   
   let sqlQuery = `DELETE FROM companies WHERE id = ${id}`;

   dbConnection.query(sqlQuery, error => {
       if (error) throw error; 
       res.status(200).json(`company with id ${id} deleted successfully`);
   });
};

module.exports = {getAllCompanies,getCompanyById, createNewCompany,updateCompany,deleteOneCompany}