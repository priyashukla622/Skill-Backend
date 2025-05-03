import Course from "../models/courseModel.js";
const addCourse = async (req, res) => {
    try {
      const { mainCourse, subCourses } = req.body;
      
      if (!mainCourse || !Array.isArray(subCourses) || subCourses.length === 0) {
        return res.status(400).json({ message: "Main course and at least one sub-course are required" });
      }
  
      for (let subCourse of subCourses) {
        const { name, subjects, teacher, language, classLevel,  stream, videos } = subCourse;
  
        if (!name || !subjects || !teacher || !language || !classLevel || !videos || !stream) {
          return res.status(400).json({ message: "All sub-course fields are required" });
        }
        for (let video of videos) {
          if (!video.url || !video.description || !video.teacher || !video.img) {
            return res.status(400).json({ message: "Each video must have url and description" });
          }
        }
      }
      const courseData = new Course({ mainCourse, subCourses });
      await courseData.save();
      res.status(201).json({ message: "Course added successfully" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Something went wrong" });
    }
};  
export default addCourse;









