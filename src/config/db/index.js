const mongoose = require('mongoose');


async function connect() {
    try {
        await mongoose.connect('mongodb+srv://thienbinh:thienbinh@cluster0.1yg9l.mongodb.net/Show?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log("error");
    }
}

async function connect2() {
    try {
        await mongoose.connect('mongodb+srv://data2:thienbinh@cluster0.4418l.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log("error2");
        console.log(error);
    }
}

module.exports = { connect,connect2};