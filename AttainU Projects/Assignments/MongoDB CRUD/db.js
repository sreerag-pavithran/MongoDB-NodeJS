const mongoose = require("mongoose");

mongoose
  .connect('mongodb://localhost/userdata', { useUnifiedTopology: true })
  .then(()=> console.log('mongoDB connected'))
  .catch((err)=> console.log('Found err'));


require('./models/user.model');