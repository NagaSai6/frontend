export default (filterByCourse = [], action) => {
  switch (action.type) {
    case "FILTER_BY_COURSE":
      return action.payload;
    default:
      return filterByCourse;
  }
};
