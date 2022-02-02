 Public Class
 class Human {
     constructor(name, address) {
         this.name = name;
         this.address = address;
     }

     introduce() {
         console.log(
             `Hi, my name is ${this.name} and i'm living in ${this.address}`
         );
     }

     static isEating(food) {
         let foods = ["plant", "animal"];
         return foods.includes(food.toLowerCase());
     }
 }

 let mj = new Human("Micael Jakson", "Jakarta");
 console.log(mj);

 console.log(mj.introduce());
 console.log(Human.isEating("Plant"));
 console.log(Human.isEating("Human"));
 console.log(Human.isEating("Animal"));

 Private
 class Human {
     constructor(name, address) {
         this.name = name;
         this.address = address;
     }

     #doGosip = () => {
         console.log(`My Address ${this.address}`);
     };

     talk() {
        console.log(this.#doGosip);
    }

    static #isHidingAread = true;
}

let mj = new Human("Joko", "Bandung");
console.log(mj.talk());
console.log(mj.#doGosip);

 Protected
 class Human {
     constructor(name, address) {
         this.name = name;
         this.address = address;
     }

     _call() {
         console.log(`Call me as ${this.name}`);
     }
 }

 class Programmer extends Human {
     constructor(name, address, task, salary) {
         super(name, address);
         this.task = task;
         this.salary = salary;
     }

     _doCall() {
         super._call();
     }
 }

 let sb = new Human("Joko", "Bandung");
 let job = new Programmer("Developer", "$1000");
 console.log(sb._call());
 console.log(job._doCall());

 Konsep Encapsulation
 class User {
     constructor(props) {
         let { email, password } = props;

         this.email = email;
         this.encryptedPassword = this.#encrypt(password);
     }

     #encrypt = (password) => {
         return `encrypted-version-of-${password}`;
     };

     #decrypt = () => {
         return this.encryptedPassword.split(`encrypted-version-of-`)[1];
     };

     authenticate(password) {
         return this.#decrypt() === password;
     }
 }

 let Bot = new User({
     email: "krisna@gmail.com",
     password: "123456",
 });

 const authenticated = Bot.authenticate("123");