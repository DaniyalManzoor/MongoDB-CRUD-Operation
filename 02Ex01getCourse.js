import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("Connected to MongoDb..."))
  .catch((err) => console.log("Could not connected to the MongoDB...."));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  price: Number,
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

async function getCourse() {
  return await Course.find({ isPublished: true })
    .or([{ tags: "fontend" }, { tags: "backend" }])
    .sort("-price")
    .select("name author price");
}

async function displayResult() {
  const result = await getCourse();
  console.log(result);
}

displayResult();
