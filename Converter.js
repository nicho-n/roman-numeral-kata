var Converter = {
    m: {1000: "M", 500:"D", 100:"C", 50:"L", 10:"X", 5:"V", 1:"1"},
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