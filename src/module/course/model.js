import { fetchData } from "../../utils/postgres.js";

const ALL_COURSES = `
    SELECT * FROM courses;
`;

const NEW_COURSE = `
   INSERT
      INTO 
   courses(course_name, course_duration)
      VALUES($1, $2)
   RETURNING *
`;

export const getCourses = (_) => fetchData(ALL_COURSES);
export const postCourse = (course_name, course_duration) =>
  fetchData(NEW_COURSE, course_name, course_duration);
