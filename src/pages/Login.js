import React from "react";
import styled from "styled-components";
import loginImg from "../assets/images/login-min.jpg";

function Login() {
  return (
    <LoginWrapper>
      <div className="container">
        <img src={loginImg} alt="login" />
        <h2>GitHub User</h2>
        <button className="btn">Login</button>
      </div>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #29cdc2;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    width: 70%;
    margin-bottom: 1.5rem;
  }
  h2 {
    margin-bottom: 1.5rem;
  }
`;

export default Login;
