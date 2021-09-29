export default (allColleges = [], action) => {
  switch (action.type) {
    case "GET_ALL_COLLEGES":
      return action.payload;
    default:
      return allColleges;
  }
};
