import { useSelector } from "react-redux";
import "./collegeFilter.css";
import Lists from "../../Lists/Collapse";

const CollegeFilter = (props) => {
  const filterData = useSelector((state) => state.filteredCollegeDataByState);

  var filteredStates = filterData.map((stateCollege) => {
    return <Lists key={stateCollege._id} collegeData={stateCollege} />;
  });

  return <div style={{ marginTop: "15px" }}>{filteredStates}</div>;
};

export default CollegeFilter;
