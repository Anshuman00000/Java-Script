//generator function
function* num(){
    yield 1
    yield 2
    yield 3
}
const gen =num();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
