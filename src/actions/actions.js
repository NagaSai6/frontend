import * as api from "../api/index";

export const getCollegesByStates = () => async (dispatch) => {
  try {
    const { data } = await api.getCollegesByStates();
    dispatch({ type: "FETCH_DATA_BY_STATES", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getCoursesByColleges = () => async (dispatch) => {
  try {
    const { data } = await api.getCoursesByColleges();
    dispatch({ type: "FILTER_BY_COURSE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getAllColleges = () => async (dispatch) => {
  try {
    const { data } = await api.getAllColleges();
    dispatch({ type: "GET_ALL_COLLEGES", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const filterCollegeByState = (query) => async (dispatch) => {
  try {
    const { data } = await api.filterCollegeByState(query);
    dispatch({ type: "COLLEGES_OF_STATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const filterCollegeByCourse = (query) => async (dispatch) => {
  try {
    const { data } = await api.filterCollegeByCourse(query);
    dispatch({ type: "COLLEGES_OF_COURSE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
