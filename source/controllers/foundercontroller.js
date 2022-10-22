const dbConnection = require('../Database/config')


 const GetAllFounders = (request, response) => {
    let sqlQuery = 'SELECT * FROM founders';
    let query = dbConnection.query(sqlQuery, (error, results) => {
        if(error){
          console.log(error)
          return
        }
        response.status(200).json(results)
       
    });
};


 const CreateNewFounder = (request, response) => {
    let requestBody = request.body
   const founderObject = [
      requestBody.FullName,
      requestBody.Title,
      requestBody.company_id 
  ];
  console.log(requestBody)
  if (!requestBody.FullName || !requestBody.Title || !requestBody.company_id) {
            return response.json({
            ErrorCode: 204,
            Message: 'Fields cannot be empty'
        });
    }

   let sqlQuery = 'INSERT INTO founders (FullName, Title,company_id) VALUES ( ?,?,? )';
   let query = dbConnection.query(sqlQuery, founderObject, (error, result) => {
      if(error){
         return response.status(404).json(error)
       }
       response.status(200).json(result)
   });

};




module.exports = {GetAllFounders, CreateNewFounder}