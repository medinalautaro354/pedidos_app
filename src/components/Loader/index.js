import React from "react";
import { CircularProgress } from "@material-ui/core";

const Loader = () => {
  return (
    <React.Fragment>
      <CircularProgress size={100} color="primary" />
    </React.Fragment>
  );
};

export default Loader;
