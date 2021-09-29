import { Row, Col } from "antd";
import "./collegeDetails.css";

// collegeDetailsData
const CollegeDetails = (props) => {
  return (
    <>
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
        <Col className="gutter-row index" span={8}>
          <div>Nirf Rank</div>
        </Col>
        <Col className="gutter-row value" span={16}>
          <div>{props.collegeDetailsData.rank}</div>
        </Col>
      </Row>
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
        <Col className="gutter-row index" span={8}>
          <div>Courses Offered</div>
        </Col>
        <Col className="gutter-row value" span={16}>
          <div>
            {props.collegeDetailsData.coursesOffered.map((e) => {
              return e + " , ";
            })}
          </div>
        </Col>
      </Row>
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
        <Col className="gutter-row index" span={8}>
          <div>State</div>
        </Col>
        <Col className="gutter-row value" span={16}>
          <div>{props.collegeDetailsData.state}</div>
        </Col>
      </Row>
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
        <Col className="gutter-row index" span={8}>
          <div>City</div>
        </Col>
        <Col className="gutter-row value" span={16}>
          <div>{props.collegeDetailsData.city}</div>
        </Col>
      </Row>
    </>
  );
};

export default CollegeDetails;
