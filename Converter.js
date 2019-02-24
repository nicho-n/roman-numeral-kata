var _ = require('lodash');

var Converter = {
    m: {1000: "M", 900:"CM", 500:"D", 400:"CD", 100:"C", 90:"XC", 50:"L", 40:"XL", 10:"X", 9:"IX", 5:"V", 4:"IV", 1: "I"},

    //arabic to roman 
    a2r: function(a, ret=""){
        var self = this;

        if (self.m[a] != undefined){
            return ret += self.m[a];
        }
        
        var keys = Object.keys(self.m);
        
        for (var i = keys.length; i >= 0; i--){
            var key = keys[i]
            if (a > key){
                ret += self.m[key];
                return self.a2r(a-key, ret)
            }
        }
        
        return ret;
    },

    r2a: function(a, ret=""){
        var x = _.invert(this.m)
        return x[a]
        
    }
}
    

module.exports = Converter;