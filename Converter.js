var Converter = {
    //arabic to roman 
    m: {1: "1", 5: "V"},

    a2r: function(a){
        return m[a];
    }
};


module.exports = Converter;