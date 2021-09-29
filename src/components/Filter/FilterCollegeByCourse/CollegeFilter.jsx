import { useSelector } from "react-redux";
import Lists from "../../Lists/Collapse";

const CollegeFilter = (props) => {
  const filterData = useSelector((state) => state.filteredCollegeDataByCourse);
  var filteredColleges = filterData.map((courseCollege) => {
    return <Lists key={courseCollege._id} collegeData={courseCollege} />;
  });
  return <div style={{ marginTop: "15px" }}>{filteredColleges}</div>;
};

export default CollegeFilter;
