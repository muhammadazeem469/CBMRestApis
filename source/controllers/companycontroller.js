const dbConnection = require('../Database/config')


 const GetAllCompanies = (request, response) => {
    let sqlQuery = 'SELECT * FROM companies';
    let query = dbConnection.query(sqlQuery, (error, results) => {
        if(error){
            console.log(error)
            return
        }
        response.status(200).json(results)
        
    });
};

 const GetCompanyById = (request, response) => {
    const id = parseInt(request.params.id);
    if (isNaN(id)) {
        return response.json('You must enter a valid id as a parameter');
    }
    let sqlQuery = `SELECT * FROM companies WHERE id = ${id}; SELECT * FROM founders WHERE company_id = ${id}` ;
    dbConnection.query(sqlQuery,(error, result) => {
                if(error){
                console.log(error)
                return
                }
            if (result.length === 0) {
                response.status(400).json('No Company Found');
            }   
            
            let resultObject = result[0]
            if(result[0].length){
                const companyObject = {
                id: resultObject[0].id,
                CompanyName: resultObject[0].CompanyName,
                City:resultObject[0].City,
                State:resultObject[0].State,
                Description:resultObject[0].Description,
                FoundedDate:resultObject[0].FoundedDate,
                Founders: result[1],
            }
             response.status(200).json(companyObject)

            }
            
        });        

};

 const AddNewCompany = (request, response) => {
   
   let requestBody = request.body
   const companyObject = [
        requestBody.CompanyName,
        requestBody.City,
        requestBody.State,
        requestBody.Description,
        requestBody.FoundedDate
  ];
  if (!requestBody.CompanyName || !requestBody.City || !requestBody.Description || !requestBody.State) {
    return response.json({
       ErrorCode: 204,
       Message: 'Fields cannot be empty'
   });
}

   let sqlQuery = 'INSERT INTO companies (CompanyName, City,State, Description, FoundedDate) VALUES ( ?,?,?,?,? )';
   let query = dbConnection.query(sqlQuery, companyObject, (err, result) => {
      if(err){
         console.log(err)
         return
       }
       response.status(200).json(result)
   });

};

 const UpdateCompany = (request, response) => {
    const id = parseInt(request.params.id);
    console.log(request.body)
    const requestBody = request.body;
    const companyObject = [
        requestBody.CompanyName,
        requestBody.City,
        requestBody.State,
        requestBody.Description,
        requestBody.FoundedDate
    ];

    if (isNaN(id)) {
        return response.json('You must enter a valid id as a parameter');
    }

    if (!requestBody.CompanyName || !requestBody.City || !requestBody.Description || !requestBody.State) {
        return response.json({
            ErrorCode: 204,
            Message: 'Fields cannot be empty'
        });
    }

    let sqlQuery = `UPDATE companies SET CompanyName = ?, City = ?, State = ?, Description = ?, FoundedDate = ? WHERE id = ${id}`


    dbConnection.query(sqlQuery, companyObject,  (error, result) => {
         if(error){
            console.log(error)
            return
         }
        if (result.affectedRow === 0) {
            response.send('No customer was updated');
        }
        response.json(`Customer with id ${id} updated successfully`);
    });
};

 const DeleteOneCompany = (request, response) => {

   const id = parseInt(request.params.id);

   if (isNaN(id)) {
       return response.json('You must enter a valid id as a parameter');
   }
   
   let sqlQuery = `DELETE FROM companies WHERE id = ${id}`;

   dbConnection.query(sqlQuery, error => {
       if (error) throw error; 
       response.status(200).json(`company with id ${id} deleted successfully`);
   });
};

module.exports = {GetAllCompanies,GetCompanyById, AddNewCompany,UpdateCompany,DeleteOneCompany}