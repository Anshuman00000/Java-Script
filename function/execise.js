//ex-1
let sum=(x,y)=>{
    let total=0
     for (let index = x; index <= y; index++) {
        total =total+index;
     }
     return total
}
console.log(sum(1,10))