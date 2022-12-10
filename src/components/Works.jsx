import React from "react";
import styled from "styled-components";
import { work1, work2, work3, work4, work5, work6 } from "../assets/img";

const Container = styled.section`
  min-height: 100vh;
  margin-bottom: 20rem;
`;

const Header = styled.div`
  text-align: center;
  h2 {
    font-size: 5.5rem;
    font-weight: 600;
  }
`;

const Wrapper = styled.div`
  padding-top: 7rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Works = () => {
  return (
    <Container>
      <Header>
        <h2>Work</h2>
      </Header>
      <Wrapper>
        <Grid>
          <img src={work2} alt="abstract image" />
          <img src={work1} alt="abstract image" />
          <img src={work3} alt="abstract image" />
          <img src={work4} alt="abstract image" />
          <img src={work5} alt="abstract image" />
          <img src={work6} alt="abstract image" />
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default Works;
