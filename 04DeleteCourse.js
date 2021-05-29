const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("Connected to MongoDB...."))
  .catch((err) => console.log("Cloud not connected to the mongodb....", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  price: Number,
  tags: [String],
  isPublished: Boolean,
  date: { type: Date, default: Date.now },
});

const Course = mongoose.model("Course", courseSchema);

async function removeCourse() {
  //   const deletedCourse = await Course.deleteOne({ _id: id });
  const deletedCourse = await Course.findByIdAndRemove(id);

  console.log(deletedCourse);
}

removeCourse("60b0d00aafca36e1c0f37e19");
