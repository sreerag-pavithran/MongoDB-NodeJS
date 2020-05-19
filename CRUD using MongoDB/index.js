const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/fruitDB")
  .then(() => console.log("MongoDB started"))
  .catch((err) => console.log("Error found", err));

// Creating a new schema for fruit
const fruitSchema = mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 9,
  review: "A good fruit",
});

// Creating a new schema for person

const personSchema = mongoose.Schema({
  name: String,
  age: Number,
});

fruit.save();

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Sreerag",
  age: 21,
});

person.save();

// Adding many

const banana = new Fruit({
  name: "Banana",
  rating: 10,
  review: "Random review",
});

const orange = new Fruit({
  name: "Orange",
  rating: 8,
  review: "Some random review",
});

Fruit.insertMany([banana, orange], function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully added");
  }
});

// Finding and list out all item names
Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    // console.log(fruits);
    fruits.forEach(function (single) {
      console.log(single.name);
    });
    mongoose.connection.close(); // Closing the collection after execution
  }
});

// Updating an item
Fruit.updateOne(
  { _id: "5ec416e0d237095414a93529" },
  { name: "Cherry" },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Item has been updated");
    }
  }
);

// Deleting an item
Fruit.deleteOne({ name: "Cherry" }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Item deleted");
  }
});
