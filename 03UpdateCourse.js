const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("Connected to Mongodb..."))
  .catch((e) => console.log("Could not connected with datebasse..." + e));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  price: Number,
  tags: [String],
  isPublished: Boolean,
  date: { type: Date, default: Date.now },
});

const Course = mongoose.model("Course", courseSchema);

// async function updateCourse(id) {
//   // Approch QueryFirst
//   // findbyid()
//   // Modify its properties
//   // save()
//   const course = await Course.findById(id);
//   console.log(course);

//   if (!course) return;

//   course.isPublished = true;
//   course.author = "Mosh";

//   //   course.set({
//   //     isPublished: true,
//   //     author: "Another author",
//   //   });

//   const result = await course.save();
//   console.log(result);
// }

async function updateCourse(id) {
  // Approch Update first
  // Update direct
  // Optionally get the update document
  //   update and findByIdAndUpdate
  // update({_id: id}, {$set{}})

  const course = await Course.findByIdAndUpdate(
    id,
    {
      $set: {
        author: "Jason",
        isPublished: false,
      },
    },
    { new: true }
  );

  console.log(course);
}

updateCourse("60b0d00aafca36e1c0f37e16");
