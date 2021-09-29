import { Bar } from "@ant-design/charts";
import { useSelector,useDispatch  } from "react-redux";
import { useState } from "react";


import { filterCollegeByCourse } from "../../../actions/actions";
import FilterByCourse from "../../Filter/FilterCollegeByCourse/CollegeFilter";

const Chart = () => {
  const [showColleges, setShowColleges] = useState(false);
  const data = useSelector((state) => state.courseData);
  var config = {
    data: data,
    xField: "count",
    yField: "course",
    seriesField: "course",
    legend: false,
    renderer: "svg",
  };
  const dispatch = useDispatch();
  const filterCollegesByCourse = (input) => {
    let query = input["course"];
    let modifiedQuery = query.replace(/[^0-9a-z\s]/gi, "");
    dispatch(filterCollegeByCourse(modifiedQuery));
    setShowColleges(true);
  };

  return (
    <>
      <div>
        <Bar
          {...config}
          onReady={(plot) => {
            plot.chart.on("element:click", (evt) => {
              const { x, y } = evt;
              let requiredData = plot.chart.getTooltipItems({ x, y })[0].data;
              filterCollegesByCourse(requiredData);
            });
          }}
        />
      </div>

      {showColleges ? <FilterByCourse /> : ""}
    </>
  );
};

export default Chart;
