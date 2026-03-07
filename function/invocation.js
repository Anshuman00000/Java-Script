//invocation Method
const user = {
    name: "John",
    greet: function () {
        return `Hello, \${this.name}!`;
    },
};
console.log(user.greet());

//invocation function
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));

//invocation constructer 
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const alex = new Person("Tara", 25);
console.log(alex.name);

//invocation indirect
//case-1 call()
function greet(greeting) {
    return `\${greeting}, \${this.name}!`;
}
const users = { name: "Max" };
console.log(greet.call(users, "Hello"));
console.log(greet.apply(users, ["Hi"]));
console.log(greet.bind(users,"hom"))

//Arrow invocation
const user1 = {
    name: "Alexa",
    greet: () => {
        return `Hello, \${this.name}!`; 
        // `this` here is not bound to `user`
    },
};
console.log(user1.greet());