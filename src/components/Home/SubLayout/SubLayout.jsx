import { useSelector } from "react-redux";
import { List } from "antd";
import Lists from "../../Lists/Collapse.jsx";

const HomeSub = () => {
  const data = useSelector((state) => state.allCollegesData);

  const lists = data.map((list) => {
    return <Lists key={list._id} collegeData={list} />;
  });

  return <List>{lists}</List>;
};

export default HomeSub;
