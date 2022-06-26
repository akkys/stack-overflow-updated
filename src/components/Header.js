import React from "react";

const Header = ({ title, totalQuestions, questions, searchQue }) => {
  return (
    <div className="container">
      <h3 style={{ margin: "25px 25px 10px 25px" }}>{title}</h3>
      <p
        style={{
          margin: "15px 25px 25px 25px",
          fontSize: "17px",
        }}
      >
        {/* {props.questions.length} of {props.totalQuestions.length} questions */}
        {totalQuestions.length} results
      </p>
      <hr />
    </div>
  );
};

export default Header;
