import React from "react";

const TabSection = ({ question }) => {
  return (
    <div className="col-md-2">
      <div className="tabs">
        <span className="tabs-votes mb-1">
          {question.score}
          <span className="tabs-label">votes</span>
        </span>
        <span className="tabs-answer mb-1">
          <i className="fa fa-check" aria-hidden="true" />{" "}
          {question.answer_count}
          <span className="tabs-label">answers</span>
        </span>
        <span className="tabs-views mb-1">
          {question.view_count}
          <span className="tabs-label">views</span>
        </span>
      </div>
    </div>
  );
};

export default TabSection;
