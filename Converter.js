var Converter = {
    m: {1000: "M", 500:"D", 100:"C", 50:"L", 10:"X", 5:"V", 4:"IV", 1: "I"},

    //arabic to roman 
    a2r: function(a, ret=""){
        var self = this;

        if (self.m[a] != undefined){
            return ret += self.m[a];
        }
        
        var keys = Object.keys(slef.m);
        
        for (var i = keys.length; i >= 0; i--){
            var key = keys[i]
            if (a > key){
                ret += self.m[key];
                return self.a2r(a-key, ret)
            }
        }
        
        return ret;
    }
}
    

module.exports = Converter;