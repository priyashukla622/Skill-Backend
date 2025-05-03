import mongoose from "mongoose";

const courseData = new mongoose.Schema({
  mainCourse: { type: String, required: true },
  subCourses: [
    {
      name: { type: String, required: true },
      subjects: [{ type: String }],
      teacher: { type: String, required: true },
      language: { type: String, required: true },
      classLevel: { type: String },
      videos: [
        {
          url: { type: String, required: true },
          description: { type: String, default: "" },
          teacher: { type: String, required: true },
          stream: { type: String, required: true },
          img: { type: String, default: "" }
        },
      ],
    },
  ],
});
const Course = mongoose.model("Data", courseData);
export default Course;
