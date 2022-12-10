import React from "react";
import styled from "styled-components";

const Container = styled.section`
  height: 90vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.div`
  h2 {
    font-size: 5.5rem;
    font-weight: 600;
  }
`;

const Wrapper = styled.div`
  padding-top: 5rem;
`;

const Info = styled.div`
  font-size: 3.5rem;
  font-weight: 300;
  margin-bottom: 5rem;
`;

const Links = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 6rem;
  li {
    color: ${(p) => p.theme.colors.grey};
    font-size: 2.6rem;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Header>
        <h2>Contact</h2>
      </Header>
      <Wrapper></Wrapper>
      <Info>
        <p>contact@website.com</p>
        <p>+0 0000 0000</p>
      </Info>
      <Links>
        <li>Twitter</li>
        <li>Linkedin</li>
        <li>Dribble</li>
        <li>YouTube</li>
        <li>Instagram</li>
        <li>Facebook</li>
      </Links>
    </Container>
  );
};

export default Contact;
