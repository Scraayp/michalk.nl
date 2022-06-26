import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Hez"
              description="This multi purpose discord bot will be able to do everything your server needs it to do: moderation, administration etc.. The bot has been made in Typescript and Discord.js. (private)"
              ghLink="https://github.com/scraayp/hez"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Discord Anti Spam"
              description="A npm package which allows discord.js bot owners to create anti spam for their servers. This package will scan for messages in your server and block if they hit the limit set by the owner."
              ghLink="https://github.com/Michael-J-Scofield/discord-anti-spam"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Hostsapling - Hosting"
              description="A hosting service for your needs. "
              ghLink="https://github.com/HostSapling/issue-tracker"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
