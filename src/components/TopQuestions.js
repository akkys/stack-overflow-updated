import React from "react";
import so_logo from "./images/so-logo.png";
import q_logo from "./images/q-logo.png";
import TabSection from "./TabSection";
import QuestionSection from "./QuestionSection";

const TopQuestions = ({ questions }) => {
  return (
    <div>
      <div className="container">
        {questions.map((question) => {
          return (
            <div key={question.question_id} className="row">
              <TabSection question={question} />
              <QuestionSection
                question={question}
                q_logo={q_logo}
                so_logo={so_logo}
              />
              <hr />
            </div>
          );
        })}
      </div>
      <br />
    </div>
  );
};

export default TopQuestions;
