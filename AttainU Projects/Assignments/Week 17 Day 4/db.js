const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/testdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(()=> console.log('MongoDB Connected'))
    .catch(()=> console.log('Error Occured'));

