//Higher Order Function
function Multiply(fact){
   return function(num){
    return fact*num
   }
}
const triple=Multiply(3)
console.log(triple(10))