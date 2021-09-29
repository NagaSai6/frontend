export default (collegeByState = [], action) => {
  switch (action.type) {
    case "COLLEGES_OF_STATE":
      return action.payload;
    default:
      return collegeByState;
  }
};
