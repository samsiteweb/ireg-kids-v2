import React, { Fragment } from "react";

const CardHeader = ({ header, description }) => {
  return (
    <Fragment>
      <div>
        <h1 style={{ color: "rgb(0, 51, 153)" }}>{header}</h1>
      </div>
      <div style={{ paddingBottom: 20, marginTop: "-15px" }}>
        <h4>{description}</h4>
      </div>
    </Fragment>
  );
};

export default CardHeader;
