var Converter = {
    m: {1: "I", 5: "V", 10: "X", 50:"L", 100:"C", 500: "D", 1000:"M"},
    ret: "",
    
    //arabic to roman 
    a2r: function(a){
        return max_less_than_p(a, this.m);
    }
};

function max_less_than_p(p, m){
    for (var i = 0; i <Object.keys(m).length; i++){
        if (p < 5) return "I";

        if (Object.keys(m)[i] > p){
            return Object.values(m)[i-1];
        }
    }
}

module.exports = Converter;