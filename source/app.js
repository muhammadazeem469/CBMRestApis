const express = require('express')
const router = require('./routes/companyroutes')
const founderrouter = require('./routes/founderroutes')

const app = express()
app.use(express.json())
//console.log(router.stack)

var allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);
    






app.use('/',router)
app.use('/',founderrouter)

app.listen('3001', ()=>{
    console.log("server started on Port 3001")
})

module.exports = app