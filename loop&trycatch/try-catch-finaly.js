//try-catch-finally
const Uname="Anshuman"
try {
    console.log(Myname)
} catch (error) {
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}finally{
    console.log("Completed")
}