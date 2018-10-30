const utils  = require('./utils');

const expect = require('expect');

describe('Utils', () => {

    it('should add two numbers', () => {
        var result = utils.add(33,11);
    
        expect(result).toBe(44).toBeA('number');
        // if(result !== 44){
        //     throw new Error(`Expected 44 but got ${result}`);
        // }
    
    
    });
    
    it('should square a number', () => {
        var result = utils.sqare(3);
    
        if(result !== 9){
            throw new Error(`Expected 9 but got ${result}`);
        }
    })
    
    it('should async add two numbers', (done)=> {
        var result = utils.asyncAdd(5,2,(sum)=>{
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    })
    
    
    it('should async square numbers', (done)=> {
        var result = utils.asyncSquare(5, (sqare)=>{
            expect(sqare).toBe(25).toBeA('number');
            done();
        });
    })
    
    it('should set firstName and lastName', () => {
        var user = {location: "Nonthaburi", age:27};
        var result = utils.setName(user, 'Tikumporn Wankvar');
        expect(result).toInclude({
            firstName: "Tikumporn",
            lastName: "Wankvar"
        })
    })
    // it('should expect some values', () => {
    //     // expect({'name': 'amp'}).toEqual({'name': 'amp'});
    //     // expect([1,2,3,4]).toExclude(5);
    //     expect({
    //         name: 'Amp',
    //         age: '27',
    //         location: 'Nonthaburi'
    //     }).toInclude({
    //         age:27
    //     })
    // });
});

