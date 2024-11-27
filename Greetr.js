// imediately invoked function
;(function(global, $){
    // greetr function that returns a function ("new object")
    var Greetr = function(firstName,lastName,language){
        return new Greetr.init(firstName,lastName,language);
    }

    var supportedLangs = ["en", "es"];

    var greetings ={
        en : "hello",
        es : "hola"
    };

     var formalGreetings = {
        en : "Greetings",
        es : "Saludos"
    };

    var logMessage ={
        en : "logged in",
        es : "Inicio  sesion"
    };


    Greetr.prototype = {

        fullName : function(){
            return this.firstName + " " + this.lastName;
        },

        validate : function(){
            if(supportedLangs.indexOf(this.language) === -1){
                throw "invalid language!";
            }
        },

        greetings : function(){
            return greetings[this.language] + " " + this.firstName;
        },
        
        formalGreetings : function(){
            return formalGreetings[this.language] + " " + this.fullName();
        },
        greet : function(formal){
            var msg;

            // if undefined or null it will be coersed to false 
            if (formal){
                msg = this.formalGreetings();
            }
            else{
                msg = this.greetings();
            }
            if (console){
                console.log(msg);
            }

            // 'this' refers to calling object at execution time
            return this;
        },

        log : function(){
            if(console){
                console.log(logMessage[this.language] + ":" + this.fullName());
            }
            return this;
        },

        setLang : function(lang){
            this.language = lang;

            this.validate();

            return this;
        },

        HTMLGreeting : function(selector,formal){
            if(!$){
                throw "jQuery not loaded";
            }
            if (!selector){
                throw "missing jQuery selector";
            }
            var msg;
            if (formal){
                msg = this.formalGreetings();
            }
            else{
                msg = this.greetings();
            }
            $(selector).html(msg);

            return this;

        }
    };


    Greetr.init = function(firstName,lastName,language){
        // self points to this and this point to the current function constructor
        var self = this;
        // setting default values
        self.firstName = firstName || "john";
        self.lastName = lastName || "doe";
        self.language = language || "en";

        self.validate();

    }
   // refer to greetr prototype for methods
    Greetr.init.prototype =Greetr.prototype;
     
    // on the global object Greetr and G$(alias) points to our function same function 
    global.Greetr = global.G$ = Greetr;

}(window,jQuery));