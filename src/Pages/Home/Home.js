import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Css/bgdark.css";
export const Home = () => {
  return (
    <div className="home page-background">
      <div className="section">
        <div className="section-content">
          <h1>This is Section 1</h1>
          <p>Content for the first section goes here.</p>
        </div>
      </div>
      <div className="section">
        <div className="section-content">
          <h1>This is Section 2</h1>
          <p>Content for the second section goes here.</p>
        </div>
      </div>
    </div>
  );
};

export const HomeTwo = () => {
  return (
    <div className="home page-background">
      <h1>This is the home page</h1>
    </div>
  );
};
