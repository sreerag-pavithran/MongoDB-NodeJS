const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mongo-exercise01")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tages: [String],
  date: Date,
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model("Course", courseSchema);

async function getCourses() {
  return await Course.find({
    isPublished: true,
    tags: { $in: ["frontend", "backend"] },
  })
    .sort({ name: -1 })
    .select({ name: -1, author: -1, price: 1 });
}

async function run() {
  const courses = await getCourses();
  //   console.log(courses);
}
run();

async function updateCourse(id) {
  const course = await Course.findById(id);
  if (!course) return;

  course.isPublished = true;
  course.author = "Another Author";

  const result = await course.save();
  console.log(result);
}

updateCourse("5a68fdc3615eda645bc6bdec");
