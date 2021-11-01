import { useSelector } from "react-redux";
import "./collegeFilter.css";
import Lists from "../../Lists/Collapse";

const CollegeFilter = (props) => {
  const filterData = useSelector((state) => state.filteredCollegeDataByState);

  // var filteredStates = filterData.map((stateCollege) => {
  //   return <Lists key={stateCollege._id} collegeData={stateCollege} />;
  // });

  return <Lists style={{ marginTop: "15px" }} data={filterData} />
};

export default CollegeFilter;
