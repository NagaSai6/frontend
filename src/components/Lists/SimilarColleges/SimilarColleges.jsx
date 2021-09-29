import axios from "axios";
import { Spin } from "antd";
import { useEffect, useState } from "react";
import { Row, Col } from "antd";
import "./similar.css";

const SimilarColleges = (props) => {
  const id = props.similar._id;
  const [data, setData] = useState(null);

  const url = `https://oneshot-ai-server.herokuapp.com/oneshot-ai/find-similar-colleges/${id}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, [url]);

  if (!data) {
    return <Spin />;
  }

  if (data.length > 0) {
    return data.map((e) => {
      return (
        <Row key={e._id}>
          <Col className="similar-college">{e.name}</Col>
          <br />
        </Row>
      );
    });
  } else {
    return (
      <Row>
        <Col>No Similar College Found</Col>
      </Row>
    );
  }
};

export default SimilarColleges;
