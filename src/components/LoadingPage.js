import React from "react";

const LoadingPage = () => {
  return (
    <div className="container">
      <h4 style={{ margin: "25px", color: "red" }}>
        <i className="fa fa-circle-o-notch fa-spin" />
        {` `}Loading..... Please Wait!!!
      </h4>
    </div>
  );
};

export default LoadingPage;
