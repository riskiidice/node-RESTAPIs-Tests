var db = require('./db.js');

module.exports.handlerSignup = (email, password) => {
    // check if email already exist
    db.saveUser({email,password});    
    // send welcome to email
}