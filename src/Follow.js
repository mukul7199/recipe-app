import React from "react";
const Follow = () => {
  return (
    <div className="section-follow center">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h4>Follow RecipeApp</h4>
            <p>Follow us on social media</p>
            <a
              href="https://facebook.com"
              target="_blank"
              className="white-text"
            >
              <i className="fab fa-facebook fa-4x" />
            </a>
            <a
              href="https://twiiter.com"
              target="_blank"
              className="white-text"
            >
              <i className="fab fa-twitter fa-4x" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="white-text"
            >
              <i className="fab fa-linkedin fa-4x" />
            </a>
            <a
              href="https://googleplus.com"
              target="_blank"
              className="white-text"
            >
              <i className="fab fa-google-plus fa-4x " />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              className="white-text"
            >
              <i className="fab fa-pinterest fa-4x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Follow;
