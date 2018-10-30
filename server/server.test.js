const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;

describe('Server', ()=> {
    it('should return hello wolrd response', (done) => {
        request(app)
            .get("/")
            .expect(404)
            .expect((res) => {
                expect(res.body).toInclude({
                    error: 'Page not found'
                })
            })
            .end(done);
    });
    
    it('should return my users objects', (done) => {
        request(app)
            .get("/users")
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    name: "Tikumporn Wankvar",
                    age: 27
                })
            }).end(done)
    });
});
