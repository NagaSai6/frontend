import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// actions
import { getCollegesByStates } from "../../actions/actions";
import Chart from "./Charts/Charts";

import { Typography } from "antd";
import "./stateStyles.css";

const { Title } = Typography;

const SortByState = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCollegesByStates());
  }, [dispatch]);

  const stateData = useSelector((state) => state.data);

  return (
    <>
      <Title className="title" level={2}>
        {" "}
        Charts by States{" "}
      </Title>

      <Chart data={stateData} />
    </>
  );
};

export default SortByState;
