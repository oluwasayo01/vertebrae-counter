import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { Layout } from "antd";
import ImageDisplay from "./imageDisplay";

const { Header, Content, Footer } = Layout;

const Input = styled.input.attrs((props) => ({
  type: "file",
  multiple: true,
}))`
  color: red;
  display: none;
`;

const Label = styled.label`
  display: flex;
  background-color: blue;
  color: white;
  cursor: pointer;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  border: 5px solid green;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30vh;
`;

const Home = () => {
  const [select, setSelect] = useState(true);
  const [files, setFiles] = useState([]);
  const history = useHistory();
  useEffect(() => {
    console.log(files);
  }, [files]);

  const handleSelect = (e) => {
    e.preventDefault();
    setFiles(e.target.files);
  };

  const handleClick = () => {
    if (!files.length) return;
    console.log("click");
    // history.push({ pathname: "/detections", state: files });
    setSelect(false);
  };

  return (
    <Layout className="layout">
      <Header></Header>
      <Content>
        {select && (
          <Div>
            <h1>
              {files.length
                ? `Selected ${files.length} image${files.length > 1 ? "s" : ""}`
                : "Click to select images"}
            </h1>
            <Label onClick={handleClick}>
              {files.length === 0 && <Input onChange={handleSelect} />}
              {files.length ? "Go!" : "+"}
            </Label>
          </Div>
        )}
      </Content>
      {!select && <ImageDisplay fileList={files} />}
    </Layout>
  );
};

export default Home;
