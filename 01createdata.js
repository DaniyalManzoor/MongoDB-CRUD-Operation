const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/palyground")
  .then(() => console.log("Connected to mongoDB..."))
  .catch((err) => console.error("Cloud not connect to MongoDB....", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  data: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Angular.js",
    author: "mosh",
    tags: ["angular", "frontend"],
    isPublished: true,
  });

  // Save Course
  const result = await course.save();
  console.log(result);
}
