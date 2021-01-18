import React from "react";
import styled from "styled-components";
import loadingImg from "../assets/images/loading.gif";
import { useAuth0 } from "@auth0/auth0-react";

function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <Wrapper>
        <img src={loadingImg} alt="loading" />
      </Wrapper>
    );
  }
  if (error) {
    return <Wrapper>Oops... {error.message}</Wrapper>;
  }
  return <>{children}</>;
}
export default AuthWrapper;

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #191f26;

  img {
    width: 35%;
  }
`;
