import express from "express";
import addCourse from "../controllers/addCourse.js"; 
import  {getCourse,getAll} from "../controllers/getCourse.js";
import updatedCourse  from "../controllers/update.js";

const router=express.Router()

router.post("/addCourse",addCourse)
router.get("/getCourse", getCourse)
router.get("/getData/:id",getAll)
router.put("/updateCourse/:id",updatedCourse)

export default router;