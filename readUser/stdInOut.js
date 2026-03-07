//Case-4
process.stdin.on('data', function(data) {
    console.log("You typed: " + data.toString().trim());
    process.exit();
});

console.log("Type something:");