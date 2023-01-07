// Import react
import * as React from "react";

// Import the styling
import "../styles/index.css";

const IndexPage = () => {
  return (
    <div>
      <div className="construction">
        <h1>Website Under Construction</h1>
        <h2>Soon!</h2>
        <br></br>
        <p>
          <a href="mailto:hello@michalk.nl">&copy; Michal - 2023</a>
        </p>
      </div>
      <div id="outerCraneContainer">
        <div className="buildings">
          <div />
          <div className={1} />
          <div className={2} />
          <div className={3} />
          <div className={4} />
        </div>
        <div className="crane craneThree">
          <div className="line lineOne" />
          <div className="line lineTwo" />
          <div className="line lineThree" />
          <div className="stand" />
          <div className="weight" />
          <div className="cabin" />
          <div className="arm" />
        </div>
        <div className="crane craneTwo">
          <div className="line lineOne" />
          <div className="line lineTwo" />
          <div className="line lineThree" />
          <div className="stand" />
          <div className="weight" />
          <div className="cabin" />
          <div className="arm" />
        </div>
        <div className="crane craneOne">
          <div className="line lineOne" />
          <div className="line lineTwo" />
          <div className="line lineThree" />
          <div className="stand" />
          <div className="weight" />
          <div className="cabin" />
          <div className="arm" />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Construction</title>
    <meta
      name="description"
      content="The website is under construction Soon!"
    />
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
);
