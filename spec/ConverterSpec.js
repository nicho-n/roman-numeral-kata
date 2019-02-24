var Converter = require("../Converter"); 

describe("Arabic to Roman Test cases", function() {
    
    it("1 should equal I", function() { 
		expect(Converter.a2r(1)).toEqual("I");
    });

    it("5 should equal V", function() {
		expect(Converter.a2r(5)).toEqual("V");
    });

    it("4 should equal IV", function() {
		expect(Converter.a2r(4)).toEqual("IV");
    });

    it("8 should equal VIII", function() {
      expect(Converter.a2r(8)).toEqual("VIII");
    });

});


describe("Roman to Arabic Test cases", function() {
    it("I should equal 1", function() { 
		  expect(Converter.r2a("I")).toEqual('1');
    }); 
    
    it("V should equal 5", function() {
      expect(Converter.r2a("V")).toEqual('5');
    });

    it("IV should equal 4", function() {
      expect(Converter.r2a("IV")).toEqual('4');
    });
  
    it("VIII should equal 8", function() {
        expect(Converter.r2a('VIII')).toEqual("8");
    });
  
    it("XLIX should equal 49", function() {
        expect(Converter.r2a("XLIX")).toEqual("49");
    });

});