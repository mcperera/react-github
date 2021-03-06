import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const isUser = isAuthenticated && user;

  return (
    <NavbarWrapper>
      {isUser && user.picture && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h4>Hello, {user.name}</h4>
        </div>
      )}
      {!isAuthenticated ? (
        <button onClick={loginWithRedirect}>Login</button>
      ) : (
        <button onClick={() => logout({ return: window.location.origin })}>
          Logout
        </button>
      )}
    </NavbarWrapper>
  );
}

export default Navbar;

const NavbarWrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  div {
    display: flex;
    align-items: center;
  }
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 15px;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
`;
