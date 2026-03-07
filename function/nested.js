//Nested Function
function outer(a){
    function inner(b){
        return a+b
    }
    return inner
}
const add=outer(10)
console.log(add(20))