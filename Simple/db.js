const mongoose = require('mongoose');

mongoose
    .connect(('mongodb://localhost/testdb'), {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> console.log('mongoDB connected'))
    .catch(()=> console.log('Error occured'))
