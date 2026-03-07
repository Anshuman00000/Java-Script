//Set 
const list1= new Set();
//it has not store the dupicate item
//it store in the form of the array
//it has the Set diffrent from Array
list1.add(1);
list1.add(2);
list1.add(3);
list1.delete(2);
console.log({list1})
console.log(list1.size)
console.log(list1.entries())
console.log(list1.has(1))//return bullian