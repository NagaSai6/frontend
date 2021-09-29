import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Typography } from "antd";
import { getCoursesByColleges } from "../../actions/actions";
import BarChart from "./Charts/Chart";
const { Title } = Typography;
const SortByCourse = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoursesByColleges());
  }, [dispatch]);

  return (
    <>
      <Title className="title" level={2}>
        {" "}
        Charts by Courses{" "}
      </Title>
      <BarChart />
    </>
  );
};

export default SortByCourse;
