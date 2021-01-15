import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Error() {
  return (
    <ErrorWrapper>
      <div>
        <h1>404</h1>
        <h3>Sorry, the page cannot be found!</h3>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    </ErrorWrapper>
  );
}

const ErrorWrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;

  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`;

export default Error;
