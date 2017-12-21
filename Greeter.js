var Greeter = /** @class */ (function () {
    //Constructor
    function Greeter(n, e) {
        console.log('In Constructor');
        this.name = n;
        this.email = e;
    }
    Greeter.prototype.setName = function (name) {
        this.name = name;
    };
    Greeter.prototype.setEmail = function (email) {
        this.email = email;
    };
    //greet method
    Greeter.prototype.greet = function () {
        console.log("Hello  \n            " + this.name + "\n            " + this.email + "\n            Please visit the college website for more details.");
    };
    return Greeter;
}());
var greeter = new Greeter('World', 'world@gmail.com');
greeter.greet();
