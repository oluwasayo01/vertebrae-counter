import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import ImageDisplay from "./imageDisplay";

const Detections = () => {
  const history = useHistory();
  const [files, setFiles] = useState([]);
  const { state } = history.location;
  useEffect(() => {
    setFiles(state);
  }, []);
  console.log(files);
  return <ImageDisplay files={files} />;
};

export default Detections;
