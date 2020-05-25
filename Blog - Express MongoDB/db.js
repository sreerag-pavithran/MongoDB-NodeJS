const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/testdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> console.log('MongoDB connected'))
    .catch(()=> console.log('Error occured'))