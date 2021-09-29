import { useState } from "react";
import { useDispatch } from "react-redux";
import FilterByState from "../../Filter/FIlterCollegeByState/CollegeFilter";
import { filterCollegeByState } from "../../../actions/actions.js";
import { Row, Col } from "antd";

import { Pie } from "@ant-design/charts";

import configuration from "./chartConfig";

import "./charts.css";

const SubLayout = (props) => {
  const config = { ...configuration, data: props.data };

  const [show, setshow] = useState(false);

  const dispatch = useDispatch();

  const filterFunction = (input) => {
    let query = input["type"];
    dispatch(filterCollegeByState(query));
    setshow(true);
  };

  return (
    <>
      <div className="chartWrapper">
        <Row>
          <Col span={24}>
            <Pie
              {...config}
              onReady={(plot) => {
                plot.chart.on("element:click", (evt) => {
                  const { x, y } = evt;
                  let requiredData = plot.chart.getTooltipItems({ x, y })[0]
                    .data;
                  filterFunction(requiredData);
                });
              }}
            />
          </Col>
        </Row>
      </div>

      {show ? <FilterByState /> : ""}
    </>
  );
};

export default SubLayout;
