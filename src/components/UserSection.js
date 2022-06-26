import React from "react";

const UserSection = ({ question, so_logo }) => {
  return (
    <div className="col-md-4 user">
      <div className="row">
        <div className="col-md-1">
          <img
            className="userLogo"
            src={
              question.owner.profile_image
                ? question.owner.profile_image
                : so_logo
            }
            alt="userLogo"
          />
        </div>
        <div className="col-md-8">
          <div className="userBadge">
            <a
              href={question.owner.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {question.owner.display_name}
            </a>
            <span className="tabs-count" style={{ margingLeft: "10px" }}>
              <strong>{question.owner.reputation}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSection;
