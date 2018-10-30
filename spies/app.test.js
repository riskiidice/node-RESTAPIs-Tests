const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App', ()=> {
    var db = {
        saveUser: expect.createSpy()
    }
    app.__set__('db',db);

    it('should call spy correctly', () => {
        var spy = expect.createSpy();
        spy('Amp',27);
        expect(spy).toHaveBeenCalledWith('Amp',27);
    });

    it('should call saveUser with user object', () => {
        var email = 'ampamp@ampamp.com';
        var password = 'ampamp';

        app.handlerSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email,password});
    })
})