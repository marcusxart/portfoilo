import React from "react";
import styled from "styled-components";

const Container = styled.nav`
  width: 100%;
  height: 10vh;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 9rem;
`;

const Logo = styled.div`
  font-size: 2.4rem;
  font-family: 600;
  text-transform: uppercase;
`;

const Links = styled.ul`
  list-style: none;
  display: flex;
  gap: 80px;
  font-size: 1.8rem;
  text-transform: uppercase;
`;

const Nav = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <p>logo</p>
        </Logo>
        <Links>
          <li>work</li>
          <li>services</li>
          <li>contact</li>
        </Links>
      </Wrapper>
    </Container>
  );
};

export default Nav;
