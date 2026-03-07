//Arrow function
//Case-1
const calculalateSum=(x,y)=>{
   return x+y
}
console.log(calculalateSum(18,36))
console.log(typeof calculalateSum)
//Example
const SubXY=(x,y)=>{
    if(x>y){
        return x-y
    }
    else{
        return y-x
    }
}
console.log(SubXY(10,20));
console.log(SubXY(50,20));
//case-2
//syntax
//const output=(parameter) condtion ? true action: false action;

const calculateAdd=(x,y)=> x+y;
console.log(calculateAdd(10,74))
console.log(typeof calculateAdd)

//Example

const subxy=(x,y)=>x>y ? x-y : y-x;
console.log(subxy(10,20));
console.log(subxy(50,20));
