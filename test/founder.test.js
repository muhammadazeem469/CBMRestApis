
const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http')
const app = require('../source/app')
chai.use(chaiHttp);

//Note Change the hardcoded id which exist in Database

describe('Company Controller Test',()=>{

  describe('/GET All Founders', () => {
    it('it should GET all the Founders', (done) => {
        chai.request('http://localhost:3001')
          .get('/company')
          .end((err, res) => {
                expect(res.status).to.eql(200)
            done();
          });
    });
  });

  describe('/POST Founder', () => {
    it('it should Add New Founder', (done) => {
      let companyObject = {
        FullName: "DCruz",Title: "Founder",Company_id: 73,
        }
        chai.request('http://localhost:3001')
          .post('/founder/add')
          .send(companyObject)
          .end((err, res) => {
                expect(res.status).to.eql(200)
            done();
          });
    });
  });
})

