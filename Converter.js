var Converter = {
    m: {1: "I", 4:"IV", 5: "V", 10: "X", 50:"L", 100:"C", 500: "D", 1000:"M"},
    ret: "",
    
    //arabic to roman 
    a2r: function(a){
        for (var key in m){
            if (a == key) return key;
        }
        return ret;
    }
}
    

module.exports = Converter;