const dbConnection = require('../Database/config')


 const getAllFounders = (req, res) => {
    let sql = 'SELECT * FROM founders';
    let query = dbConnection.query(sql, (err, results) => {
        if(err){
          console.log(err)
          return
        }
        res.status(200).json(results)
       
    });
};

 const getFounderById = (req, res) => {
    res.send('getFounderById')
};

 const createNewFounder = (req, res) => {
    let founder = req.body
   const founderObj = [
      founder.FullName,
      founder.Title,
      founder.company_id 
  ];
  console.log(founder)
  if (!founder.FullName || !founder.Title || !founder.company_id) {
            return res.json({
            ErrorCode: 204,
            Message: 'Fields cannot be empty'
        });
    }

   let sqlQuery = 'INSERT INTO founders (FullName, Title,company_id) VALUES ( ?,?,? )';
   let query = dbConnection.query(sqlQuery, founderObj, (err, result) => {
      if(err){
         return res.status(404).json(err)
       }
       res.status(200).json(result)
   });

};

 const updateFounder = (req, res) => {

   

    res.send('updateFounder')
};

 const deleteOneFounder = (req, res) => {

    res.send('deleteOneFounder')
};

module.exports = {getAllFounders,getFounderById, createNewFounder,updateFounder,deleteOneFounder}