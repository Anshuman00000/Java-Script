//create function
//name=parameter
//we can pass the many paramert in the function
function greetMessage(name,city){
    console.log("how are you "+name)
    console.log(`${name} i am good. Thankyou!!`)
    console.log(`i am from ${city}`)
}
//call the function
greetMessage("Anshuman");
//argumt that pass from the calling functin
//wn we no pass an argument it shows the undifine not an error
greetMessage("Anshuman","Rankuda")
greetMessage()//not shows the error