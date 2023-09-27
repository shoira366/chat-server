import { Exception } from "../../exception/exception.js";
import { getCourses, postCourse } from "./model.js";

export default {
  GET: async (_, res) => {
    const allCourses = await getCourses().catch((err) =>
      next(new Exception(err.message, 503))
    );
    if (allCourses) res.json(allCourses);
  },
  POST: async (req, res, next) => {
    const { course_name, course_duration } = req.body;
    const newCourse = await postCourse(course_name, course_duration).catch(
      (err) => next(new Exception(err.message, 503))
    );
    if (newCourse)
      res.status(201).json({
        status: 201,
        message: "Course successfully created",
      });
  },
};
