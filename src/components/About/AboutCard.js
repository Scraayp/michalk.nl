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
          </p>

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
