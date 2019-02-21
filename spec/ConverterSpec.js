var Converter = require("../Converter"); 

describe("Arabic to Roman Test cases", function() {

    it("converter should exist", function() {
		expect(Converter).not.toEqual(undefined);
    });
    
    it("1 should return I", function() { 
		expect(Converter.a2r(1)).toEqual("I");
    });

    it("5 should equal V", function() {
		expect(Converter.a2r(5)).toEqual("V");
    });

    it("4 should equal IV", function() {
		expect(Converter.a2r(4)).toEqual("IV");
    });

    it("8 should equal VIII", function() {
      expect(Converter.a2r(4)).toEqual("VIII");
      });
});
