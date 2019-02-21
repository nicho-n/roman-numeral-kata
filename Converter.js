var Converter = {
    m: {1: "I", 5: "V", 10: "X", 50:"L", 100:"C", 500: "D", 1000:"M"},
    ret: "",
    
    //arabic to roman 
    a2r: function(a){
       for (var key in this.m){
            if (a == key) return this.m[key];
        
            if (a - key == -1){
                this.ret += "I";
                this.ret += this.m[key];
            }

       }
       return this.ret;
    }
};


module.exports = Converter;