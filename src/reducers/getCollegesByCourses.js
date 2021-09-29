export default (getCollegesByCourses = [], action) => {
  switch (action.type) {
    case "COLLEGES_OF_COURSE":
      return action.payload;

    default:
      return getCollegesByCourses;
  }
};
