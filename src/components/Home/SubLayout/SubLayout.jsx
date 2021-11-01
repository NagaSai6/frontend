import { useSelector } from "react-redux";
import { List } from "antd";
import Lists from "../../Lists/Collapse.jsx";

const HomeSub = () => {
  const data = useSelector((state) => state.allCollegesData);
  console.log(data);

  // const lists = data.map((list) => {
  //   return <Lists key={list._id} collegeData={list} />;
  // });

  return <Lists data={data} />
};

export default HomeSub;


{/* <Collapse style={{ minWidth: "100%" }}>
<Panel header={props.collegeData.name}>
  <Collapse>
    <Panel header="College Details">
      <CollegeDetails collegeDetailsData={props.collegeData} />
    </Panel>
  </Collapse>
  <Collapse>
    <Panel header="Similar Colleges">
      <SimilarColleges similar={props.collegeData} />
    </Panel>
  </Collapse>
  <Collapse>
    <Panel header="Students">
      <Students students={props.collegeData._id} />
    </Panel>
  </Collapse>
</Panel>
</Collapse> */}