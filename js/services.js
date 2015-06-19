"use strict";


// EXAMPLE OF CORRECT DECLARATION OF SERVICE
// here is a declaration of simple utility function to know if an given param is a String.
app.service("UtilSrvc", function () {
    return {
        isAString: function(o) {
            var reg = new RegExp('^\\d+$');
            return reg.test(o.toString());
            //return typeof o == "string" || (typeof o == "object" && o.constructor === String);
        },
        helloWorld : function(name) {
        	var result = "Hum, Hello you, but your name is too weird...";
        	if (!this.isAString(name)) {
        		result = "Hello, " + name;
        	}
        	return result;
        }
    }
});
