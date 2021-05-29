import mongoose from "mongoose";

mongoose
  .connect(`mongodb://localhost/mongo-exercises`)
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

const Courses = mongoose.model("Courses", courseSchema);

async function getCourseUpto15Dollor() {
  return await Courses.find({ isPublished: true })
    .or([{ price: { $gte: 15 } }, { name: /.*by.*/i }])
    .sort("-price")
    .select("name author price");
}
async function displayResult() {
  const result = await getCourse();
  console.log(result);
}

displayResult();
