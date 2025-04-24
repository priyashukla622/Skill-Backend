// import Course from "../models/courseModel.js";
// const addCourse=async(req,res)=>{
//     try{
//         const{mainCourse,subCourses,name,subjects,teacher,classLevel,videos}=req.body;
//         if(!mainCourse||!subCourses ||!name ||!subjects ||!teacher || !classLevel || !videos){
//             return res.status(400).json({messase:"All field is require"})
//         }
//         const courseData=new Course({
//             mainCourse,
//             subCourses,
//             name,
//             subjects,
//             teacher,
//             classLevel,
//             videos
//         });
//         await courseData.save();
//         res.status(201).json({message:"course added successfully"})
//     }
//     catch(error){
//         console.log("Error is comming")
//         res.status(500).json({message:"something went wrong"})
//     }
// };
// export default addCourse;











import Course from "../models/courseModel.js";

const addCourse = async (req, res) => {
    try {
        const { mainCourse, subCourses } = req.body;
        if (!mainCourse || !Array.isArray(subCourses) || subCourses.length === 0) {
            return res.status(400).json({ message: "Main course and at least one sub-course are required" });
        }
        for (let subCourse of subCourses) {
            const { name, subjects, teacher, language, classLevel, description,videos } = subCourse;
            if (!name || !subjects || !teacher || !language || !classLevel || !description || !videos) {
                return res.status(400).json({ message: "All sub-course fields are required" });
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









