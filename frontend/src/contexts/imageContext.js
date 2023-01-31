import React from "react";

const loadContext = (text) => {};

const ImageContext = React.createContext({ data: [], func: loadContext });
export default ImageContext;
