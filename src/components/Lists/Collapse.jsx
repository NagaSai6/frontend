import { Collapse } from "antd";
import { List } from "antd";
import { useState } from "react";
import CollegeDetails from "./CollegeDetails/CollegeDetails";
import SimilarColleges from "./SimilarColleges/SimilarColleges";
import Students from "./Students/Students";
const { Panel } = Collapse;

const CollapsableLists = (props) => {
  var config = {
    defaultCurrent: 1,
    position: "both",
    pageSize: 20,
    total: 100,
    showQuickJumper: true,
  };
  if (props.data.length <= 10) {
    config = {
      ...config,
      pageSize: props.data.length,
      total: props.data.length,
    };
  }else{
    config = {
      ...config,
      pageSize: 10,
      total: props.data.length,
    };
  }
  
  console.log("object");
  console.log(config);

  return (
    <List
      itemLayout="vertical"
      pagination={config}
      dataSource={props.data}
      renderItem={(item) => {
        return (
          <List.Item key={item._id}>
            <Collapse style={{ minWidth: "100%" }}>
              <Panel header={item.name}>
                <Collapse>
                  <Panel header="College Details">
                    <CollegeDetails collegeDetailsData={item} />
                  </Panel>
                </Collapse>
                <Collapse>
                  <Panel header="Similar Colleges">
                    <SimilarColleges similar={item} />
                  </Panel>
                </Collapse>
                <Collapse>
                  <Panel header="Students">
                    <Students students={item._id} />
                  </Panel>
                </Collapse>
              </Panel>
            </Collapse>
          </List.Item>
        );
      }}
    />
  );
};

export default CollapsableLists;
