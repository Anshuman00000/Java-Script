//Case-8
const { Input } = require('enquirer');

const prompt = new Input({
    message: "What's your name?"
});

prompt.run().then(name => {
    console.log("Hello " + name);
});