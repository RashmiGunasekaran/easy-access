import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Zoo Visit</h1>
        <p className="lead">
          A curated list of all the observations made at the zoo.
        </p>
        <hr className="my-4" />
        <Link
          to="/animals"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Animal Obserbvations
        </Link>
      </div>
    </div>
  </div>
);