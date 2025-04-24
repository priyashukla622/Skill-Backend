import mongoose from "mongoose";
const courseData= new mongoose.Schema({
    mainCourse: { type: String, required: true }, 
      subCourses: [{
          name: { type: String, required: true },
          subjects: [{ type: String }], 
          teacher: { type: String, required: true }, 
          language: { type: String, required: true }, 
          classLevel: { type: String }, 
          description:{type:String},
          videos: [{ type: String }] 
      }]
  });
const Course = mongoose.model("Data", courseData);
export default Course;