import express from "express";
import { getAllCourse, getCourseId } from "../controllers/courseController.js";

const courseRouter = express.Router();


courseRouter.get('/all-courses', getAllCourse);
courseRouter.get('/:id', getCourseId);

export default courseRouter;
