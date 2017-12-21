class Greeter {
    name: string;
    email: string;
    
    //Constructor
    constructor(n, e) {
        console.log('In Constructor');
        this.name = n;
        this.email = e;
    }

    setName(name: string) {
        this.name = name; 
     }
 
    setEmail(email: string) {
         this.email = email;
     }

    //greet method
    greet() {
        console.log(`Hello  
            ${this.name}
            ${this.email}
            Please visit the college website for more details.`);
    }
}


let greeter: Greeter =  new Greeter('World', 'world@gmail.com');
greeter.greet();