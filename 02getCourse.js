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

async function getCourse() {
  // Pagination
  // get in real application througth query string
  const pageNumber = 2;
  const pageSize = 10;

  const courses = await Course.find({ author: /^Mosh/ })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort({ name: 1 })
    .count();

  console.log(courses);
}
getCourse();
