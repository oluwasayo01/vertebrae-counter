import { useState, useEffect } from "react";
import Boundingbox from "react-bounding-box";
import client from "../../utils/Client";
import { Layout, Spin, Row, Col, Card, Switch, Button } from "antd";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CirclePicker } from "react-color";
import boxOptions from "./options";
import { Header } from "antd/lib/layout/layout";

const { Content } = Layout;

const ImageDisplay = () => {
  const [image, setImage] = useState(null);
  const [options, setOptions] = useState(boxOptions);
  const [selected, setSelected] = useState(false);
  const [imageObject, setImageObject] = useState();
  const [boxes, setBoxes] = useState([]);
  const [display, setDisplay] = useState([]);
  const [loading, setLoading] = useState(false);
  const [detected, setDetected] = useState(true);

  useEffect(() => {
    if (image) {
      setImage(image);
    }
  }, [image]);

  const handleSelect = (e) => {
    e.preventDefault();
    setImage(null);
    if (e.target.files.length > 0) {
      setBoxes([])
      setDisplay([])
      setImageObject(e.target.files[0]);
      setSelected(true);
      setImage(URL.createObjectURL(e.target.files[0]));
      return;
    }
    setImage(image);
  };

  const handleSwitch = (value) => {
    if (value) {
      setDisplay([...boxes]);
      return;
    }
    setDisplay([]);
  };

  const handlePick = (object) => {
    const rgb = object.rgb;
    const colorString = `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`;
    const colors = {
      normal: colorString,
      selected: colorString,
      unselected: colorString,
    };
    setOptions({ ...options, colors });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true);
    const data = new FormData();
    data.append("file", imageObject);
    client
      .post("/detect/", data)
      .then((response) => {
        if (response.status === 200) {
          const predictions = response.data;
          const detections = predictions.map((item) => {
            const box = item[2];
            const x = box[0] - box[2] / 2;
            const y = box[1] - box[3] / 2;
            const w = box[2];
            const h = box[3];
            return [x, y, w, h];
          });
          setImage(image);
          setBoxes(detections);
          setDisplay(detections);
          setDetected(false);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log("error ", error);
      });
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Header />
      <Layout>
        <Layout
          style={{
            padding: "0 24px 24px",
            overflow: "hidden",
          }}
        >
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 10,
              minHeight: 280,
              height: 500,
              overflow: "scroll",
            }}
          >
            <Row style={{ height: "100vh" }}>
              <Col span={16}>
                <div>
                  <Button onClick={handleSubmit} type="primary" block>
                    Send
                  </Button>
                  <input type="file" onChange={handleSelect} />
                  <div
                    style={{
                      height: "100vh",
                      overflow: "scroll",
                    }}
                  >
                    <Spin spinning={loading} tip="Counting vertebrae...">
                      {selected && (
                        <Boundingbox
                          image={image}
                          boxes={display}
                          options={options}
                        />
                      )}
                    </Spin>
                  </div>
                </div>
              </Col>
              <Col span={8}>
                <div
                  style={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Card style={{ width: 300 }}>
                    <h2>Vertebrae Count</h2>
                    <p style={{ fontSize: "5rem", textAlign: "center" }}>
                      {boxes.length ? boxes.length : 0}
                    </p>
                  </Card>
                  <Card
                    style={{
                      width: 300,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h2 style={{ textAlign: "center" }}>Toggle Detections</h2>
                    <div style={{ marginLeft: "40%" }}>
                      <Switch
                        disabled={detected}
                        checkedChildren="On"
                        unCheckedChildren="Off"
                        onChange={handleSwitch}
                        defaultChecked
                      />
                    </div>
                  </Card>
                  <Card>
                    <h2 style={{ textAlign: "center" }}>Color Picker</h2>
                    <div>
                      <CirclePicker onChange={handlePick} />
                    </div>
                  </Card>
                </div>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default ImageDisplay;
