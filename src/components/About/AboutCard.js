import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Michal </span>
            from <span className="purple"> The Netherlands</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Soccer
            </li>
            <li className="about-activity">
              <ImPointRight /> Bike
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You have to believe in yourself."{" "}
          </p>
          <footer className="blockquote-footer">Sun Tzu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
