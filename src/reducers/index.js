import { combineReducers } from "redux";
import data from "./getCollegesByStates";
import filterCollegeByState from "./filterCollegeByState";
import filterCollegeByCourse from "./filterCollegeByCourse";
import getAllColleges from "./getAllColleges";
import getCollegesByCourses from "./getCollegesByCourses";

export default combineReducers({
  data: data, // charts by state
  filteredCollegeDataByState: filterCollegeByState, //  colleges data of given sector lets say Delhi
  courseData: filterCollegeByCourse, // charts by course  ex: 90% of colleges offers cs and 30% chemical etc
  allCollegesData: getAllColleges, // entire colleges data
  filteredCollegeDataByCourse: getCollegesByCourses, // colleges data of given course, ex; 10% of colleges offers data science ,
  //  clicking on that section will fetch 20% colleges data
});
