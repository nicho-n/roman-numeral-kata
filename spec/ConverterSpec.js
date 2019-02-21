var Converter = require("../Converter"); 

describe("Arabic to Roman Test cases", function() {

	it("converter should exist", function() {
		expect(Converter).not.toEqual(undefined);
    });
    
<<<<<<< HEAD
    it("1 should equal I", function() {
=======
    it("1 should return I", function() { 
>>>>>>> 7e6b19e34779e3633938e10b1948fe4901d38a05
		expect(Converter.a2r(1)).toEqual("I");
    });

    it("5 should equal V", function() {
		expect(Converter.a2r(5)).toEqual("V");
    });

    it("4 should equal IV", function() {
		expect(Converter.a2r(4)).toEqual("IV");
    });






});

