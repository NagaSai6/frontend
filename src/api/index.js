import axios from "axios";
const url = "https://oneshot-ai-server.herokuapp.com/oneshot-ai";

export const getCollegesByStates = () =>
  axios.get(`${url}/getCollegesByStates`);
export const getCoursesByColleges = () =>
  axios.get(`${url}/get-courses-by-colleges`);

export const filterCollegeByState = (query) =>
  axios.get(`${url}/filter-college-by-state/${query}`);

export const getAllColleges = () => axios.get(`${url}/`);

export const filterCollegeByCourse = (query) =>
  axios.get(`${url}/filter-college-by-course/${query}`);
