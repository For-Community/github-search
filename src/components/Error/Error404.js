import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      PAGE NOT FOUND!
      <Link to="/">Search</Link>
    </div>
  );
};

export default Error404;
