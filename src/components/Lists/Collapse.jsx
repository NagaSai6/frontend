import { Collapse } from "antd";
import CollegeDetails from "./CollegeDetails/CollegeDetails";
import SimilarColleges from "./SimilarColleges/SimilarColleges";
import Students from "./Students/Students";
const { Panel } = Collapse;

const CollapsableLists = (props) => {
  return (
    <Collapse style={{ minWidth: "100%" }}>
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
    </Collapse>
  );
};

export default CollapsableLists;
