var Converter = {
    m: {1: "I", 5: "V"},
    
    //arabic to roman 
    a2r: function(a){
        return this.m[a];
    }
};


module.exports = Converter;