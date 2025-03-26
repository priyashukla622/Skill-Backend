import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import courseRouter from "./routes/route.js";


dotenv.config();
const app = express();
const port = process.env.PORT || 5000; 
const mongoURI = process.env.MONGODB_URL;
mongoose.connect(mongoURI)
.then(() => {
    console.log("MongoDB Connected Successfully!");
}).catch((err) => {
    console.error("MongoDB Connection Error:", err);
});
app.use(cors());
app.use(express.json());

app.use("/api/courses", courseRouter);
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});