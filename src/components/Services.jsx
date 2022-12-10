import React from "react";
import styled from "styled-components";
import { Arrow } from "../assets/svg";

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
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 400px);
  gap: 3.5rem;
`;

const Card = styled.div`
  background-color: ${(p) => p.theme.colors.white};
  color: ${(p) => p.theme.colors.black};
  width: 100%;
  padding: 4.5rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  h3 {
    font-size: 2.8rem;
    font-weight: 600;
  }
  p {
    font-size: 1.6rem;
    opacity: 0.8;
  }
`;

const SeeMore = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  span {
    font-weight: 600;
    font-size: 1.6rem;
  }
  svg {
    width: 1.8rem;
  }
`;

const Services = () => {
  return (
    <Container>
      <Header>
        <h2>Services</h2>
      </Header>
      <Wrapper>
        <Grid>
          <Card>
            <h3>Graphic Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur.
            </p>
            <SeeMore>
              <span>See Details</span>
              <Arrow />
            </SeeMore>
          </Card>
          <Card>
            <h3>Product Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur.
            </p>
            <SeeMore>
              <span>See Details</span>
              <Arrow />
            </SeeMore>
          </Card>
          <Card>
            <h3>Web Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur.
            </p>
            <SeeMore>
              <span>See Details</span>
              <Arrow />
            </SeeMore>
          </Card>
          <Card>
            <h3>Video Editing</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur.
            </p>
            <SeeMore>
              <span>See Details</span>
              <Arrow />
            </SeeMore>
          </Card>
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default Services;
