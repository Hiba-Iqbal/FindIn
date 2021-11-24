import React from "react";

function CardWithLines(props) {
  const { children, className } = props;
  return (
    <div className={`c-card-with-lines ${className}`}>
      <img
        className="lines-icon"
        src={require("../../assets/images/icons/shad-lines.svg")}
        alt="icon"
      />
      {children}
    </div>
  );
}

export default CardWithLines;
