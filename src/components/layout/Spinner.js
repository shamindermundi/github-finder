import React, { Fragment } from "react";

export const Spinner = () => {
  return (
    <Fragment>
      <i
        className="fa fa-spinner fa-spin"
        style={{
          fontSize: "5em",
          margin: "auto",
          display: "table-header-group",
        }}
      />
    </Fragment>
  );
};
