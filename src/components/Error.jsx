import React from "react";

function Error(props) {
  return (
    <div className="error">
      <p>{props.message}</p>
    </div>
  );
}

export default Error;
