
const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http')
const app = require('../source/app')
chai.use(chaiHttp);

//Note Change the hardcoded id which exist in Database

describe('Company Controller Test',()=>{

  describe('/GET All Companise', () => {
    it('it should GET all the Companies', (done) => {
        chai.request('http://localhost:3001')
          .get('/company')
          .end((err, res) => {
                expect(res.status).to.eql(200)
            done();
          });
    });
  });

  describe('/POST companise', () => {
    it('it should Add New Company', (done) => {
      let companyObject = {
        CompanyName: "Clear Bridge Mobile",City: "Vaughan",State: "ontarion",FoundedDate: "2011-04-23",Description: "Clearbridge Mobile was founded by Deepak Chopra and Sanjay Malhotra in 2011, when mobile was still in its infancy. Realizing that there was an opportunity for businesses to capitalize on changing customer behavior, they started Clearbridge with a simple mission – to help companies leverage mobile to better connect with their customers. Today, Clearbridge has a robust roster of enterprise clients across media, fintech, telecom and more, and this mission is still what drives us."
        }
        chai.request('http://localhost:3001')
          .post('/company/add')
          .send(companyObject)
          .end((err, res) => {
                expect(res.status).to.eql(200)
            done();
          });
    });
  });
  describe('/GET A Single Company', () => {
    it('it should GET A Single Company', (done) => {
        chai.request('http://localhost:3001')
          .get(`/company/id/${73}`)
          .end((err, res) => {
                expect(res.status).to.eql(200)
            done();
          });
    });
  });

  describe('/Update Company', () => {
    let companyObject = {
      CompanyName: "Clear Bridge Mobile",City: "Vaughan",State: "ontarion",FoundedDate: "2011-04-30",Description: "Clearbridge Mobile was founded by Deepak Chopra and Sanjay Malhotra in 2011, when mobile was still in its infancy. Realizing that there was an opportunity for businesses to capitalize on changing customer behavior, they started Clearbridge with a simple mission – to help companies leverage mobile to better connect with their customers. Today, Clearbridge has a robust roster of enterprise clients across media, fintech, telecom and more, and this mission is still what drives us."
      }
    it('it should Update A Company data', (done) => {
        chai.request('http://localhost:3001')
          .put(`/company/update/${90}`)
          .send(companyObject)
          .end((err, res) => {
                expect(res.status).to.eql(200)
            done();
          });
    });
  })

  describe('/DELETE A Company', () => {
    it('it should DELETE A Company', (done) => {
        chai.request('http://localhost:3001')
          .delete(`/company/delete/${90}`)
          .end((err, res) => {
                expect(res.status).to.eql(200)
            done();
          });
    });
  })



})

