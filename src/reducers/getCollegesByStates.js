export default (data = [], action) => {
  switch (action.type) {
    case "FETCH_DATA_BY_STATES":
      return action.payload;
    default:
      return data;
  }
};
