import Course from "../models/courseModel.js";

const updatedCourses = async (req, res) => {
  const courseId = req.params.id; 
  console.log(courseId) 
  const updatedData = req.body;
  try {
    const updatedCourse = await Course.findByIdAndUpdate(courseId, updatedData, { new: true });

    if (!updatedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json({ message: "Course updated successfully", course: updatedCourse });
  } catch (err) {
    console.error("Error updating course:", err);
    res.status(500).json({ message: "Server error while updating course" });
  }
};
export default updatedCourses;

