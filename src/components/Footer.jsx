import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  height: 10vh;
  background-color: ${(p) => p.theme.colors.white};
  color: ${(p) => p.theme.colors.black};
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 9rem;
  font-size: 1.4rem;
`;

const Policy = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <p>2022 Creatives</p>
        <Policy>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </Policy>
      </Wrapper>
    </Container>
  );
};

export default Footer;
