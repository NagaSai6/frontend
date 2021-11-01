import { List } from "antd";
import { Collapse } from "antd";
import { Row, Col } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";

const { Panel } = Collapse;

const Students = (props) => {
  const [studentsData, setStudentsData] = useState(null);
  var config = {
    defaultCurrent: 1,
    pageSize: 5,
    position: "both",
    total: 100,
    showQuickJumper: true,
  };

  useEffect(() => {
    const url =
      "https://oneshot-ai-server.herokuapp.com/oneshot-ai/fetch-students-data/" +
      props.students;
    axios.get(url).then((res) => {
      setStudentsData(res.data);
    });
  }, [props.students]);

  if (!studentsData) {
    return <Spin />;
  }

  return (
    <List
      itemLayout="vertical"
      pagination={config}
      dataSource={studentsData}
      renderItem={(item) => {
        return (
          <List.Item key={item._id}>
            <Collapse style={{ minWidth: "100%" }}>
              <Panel header={item.name}>
                <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                  <Col className="gutter-row index" span={8}>
                    <div>Year Of Batch</div>
                  </Col>
                  <Col className="gutter-row value" span={16}>
                    <div>{item.yearOfBatch}</div>
                  </Col>
                </Row>
                <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                  <Col className="gutter-row index" span={8}>
                    <div>Skills</div>
                  </Col>
                  <Col className="gutter-row value" span={16}>
                    <div>
                      {item.skills.map((e) => {
                        return e + " , ";
                      })}
                    </div>
                  </Col>
                </Row>
              </Panel>
            </Collapse>
          </List.Item>
        );
      }}
    />
  );
};

// const Students = (props) => {
//   let id = props.students;
//   const [studentsData, setStudentsData] = useState(null);
//   const url = "http://localhost:2021/oneshot-ai/fetch-students-data/" + id;
//   console.log(url);

//   useEffect(() => {
//     axios.get(url).then((res) => {
//       setStudentsData(res.data);
//     });
//   }, [url]);

//   if (!studentsData) {
//     return <Spin />;
//   }

//   var config = {
//     pagination: {
//       pageSizeOptions: ["30", "40"],
//       showSizeChanger: true,
//     },
//   };

//   );
// };

export default Students;

{
  /* <List>
          {studentsData.map((student) => {
            return (
              <List.Item key={student._id}>
                <Collapse style={{ minWidth: "100%" }}>
                  <Panel header={student.name}>
                    <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                      <Col className="gutter-row index" span={8}>
                        <div>Year Of Batch</div>
                      </Col>
                      <Col className="gutter-row value" span={16}>
                        <div>{student.yearOfBatch}</div>
                      </Col>
                    </Row>
                    <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                      <Col className="gutter-row index" span={8}>
                        <div>Skills</div>
                      </Col>
                      <Col className="gutter-row value" span={16}>
                        <div>
                          {student.skills.map((e) => {
                            return e + " , ";
                          })}
                        </div>
                      </Col>
                    </Row>
                  </Panel>
                </Collapse>
              </List.Item>
            );
          })}
        </List> */
}
