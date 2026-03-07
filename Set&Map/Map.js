//Map
const newMap= new Map();
//it store the key=>value
newMap.set(1,"Anshuman");
newMap.set(2,"Partha");
newMap.set(3,"xyz");
console.log(newMap);
console.log(newMap.get(2));
newMap.delete(3);
console.log(newMap)
console.log(newMap.size)
console.log(newMap.keys(),newMap.values())
newMap.forEach((value)=>{
    console.log(value)
})
console.log(newMap.has(3))