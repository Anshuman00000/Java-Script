//Constructer Function
function person(name,age){
    //this.varname-> Represent the constructor name 
    this.n=name
    this.age=age
}
const user=new person("Anshuman",20)
console.log(user)
console.log(user.n)
console.log(user.age)