var Converter = {
    m: {1000: "M", 500:"D", 100:"C", 50:"L", 10:"X", 5:"V", 4:"IV", 1: "I"},
    
    //arabic to roman 
    a2r: function(a, ret=""){
        if (this.m[a] != undefined){
            ret += this.m[a];
            return ret;
        }
        
        Object.keys(this.m).forEach(function(key) {
            if (a > key){
                ret += this.m[key]
                if (a-key > 1) return this.a2r(a-key, ret);
            }
        });
        
        return ret;
    }
}
    

module.exports = Converter;