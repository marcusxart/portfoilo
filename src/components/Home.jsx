import React from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 90vh;
  padding: 0 9rem;
  margin-bottom: 15vh;
`;

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  gap: 5.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 8vw;
    line-height: 6.9vw;
    font-weight: 600;
    .row1 {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .row2 {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 1.5vw;
    }
  }
  p {
    font-size: 2rem;
    line-height: 2.5rem;
    padding: 0 20vw;
    color: ${(p) => p.theme.colors.grey};
  }
`;
const Home = () => {
  return (
    <Container>
      <Wrapper>
        <h1>
          <div className="row1">
            <span>Creative</span> <span>Innovative</span>
          </div>
          <div className="row2">
            <span>Design</span>
            <span>Agency</span>
          </div>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </Wrapper>
    </Container>
  );
};

export default Home;
