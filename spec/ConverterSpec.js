var Converter = require("../Converter"); 

describe("Arabic to Roman Test cases", function() {

	it("converter should exist", function() {
		expect(Converter).not.toEqual(undefined);
    });
    
    it("converter should exist", function() {
		expect(Converter.a2r(1)).toEqual("I");
	});



});

