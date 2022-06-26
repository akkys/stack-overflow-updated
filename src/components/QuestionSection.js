import React from "react";
import UserSection from "./UserSection";

const QuestionSection = ({ question, q_logo, so_logo }) => {
  return (
    <div className="col-md-10 mb-3">
      <img src={q_logo} className="queLogo" alt="q-logo" />
      <a
        href={question.link}
        target="_blank"
        rel="noopener noreferrer"
        className="title"
      >
        {question.title}
      </a>
      <div className="row mt-2">
        <div className="col-md-8">
          <p>
            {question.tags.map((tag, i) => {
              return (
                <span key={i} className="tag mb-2">
                  {tag}
                </span>
              );
            })}
          </p>
        </div>
        <UserSection question={question} so_logo={so_logo} />
      </div>
    </div>
  );
};

export default QuestionSection;
