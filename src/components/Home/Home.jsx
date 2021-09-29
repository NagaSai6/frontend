import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Typography } from "antd";
import { getAllColleges } from "../../actions/actions";

import HomeSub from "./SubLayout/SubLayout";
const { Title } = Typography;

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllColleges());
  }, [dispatch]);

  return (
    <>
      <Title className="title" level={3} style={{ textAlign: "center" }}>
        Top-100 Engineering Colleges
      </Title>
      <HomeSub />
    </>
  );
};

export default Home;
