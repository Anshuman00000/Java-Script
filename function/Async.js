//Asyncronisation function
async function  featchdata() {
    return "fatched data!!"
}
//it igve the promis
console.log(featchdata());
//it not give the pomis
featchdata().then(console.log)