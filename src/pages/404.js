import * as React from "react";
import { Link } from "gatsby";

const pageStyles = {
  color: "#fff",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};

const linkStyle = {
  color: "#fff",
  // Remove the underlin from the link
  textDecoration: "none",
  // Add unbderline on hover
  ":hover": {
    textDecoration: "underline",
  },
};

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        <br />
        <Link to="/" style={linkStyle}>
          Go home
        </Link>
        .
      </p>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
