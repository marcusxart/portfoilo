import React from "react";
import styled from "styled-components";

import { team1, team2, team3, team4 } from "../assets/img";

const Container = styled.section``;

const Header = styled.div`
  text-align: center;
  h2 {
    font-size: 5.5rem;
    font-weight: 600;
  }
  p {
    margin-top: 2.4rem;
    font-size: 1.8rem;
    color: ${(p) => p.theme.colors.grey};
    font-weight: 600;
    padding: 0 18vw;
  }
`;

const Wrapper = styled.div`
  padding-top: 7rem;
  width: 100%;
  display: flex;
`;

const Team = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
    object-position: 50% 10%;
  }
`;
const TeamDesc = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${(p) => p.theme.colors.white};
  color: ${(p) => p.theme.colors.black};
  padding: 1.2rem 1.8rem;
  h3 {
    font-size: 2.4rem;
  }
  p {
    font-size: 1.8rem;
  }
`;

const OurTeam = () => {
  return (
    <Container>
      <Header>
        <h2>Our Team</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </Header>
      <Wrapper>
        <Team>
          <img src={team1} alt="A team" />
          <TeamDesc>
            <h3>Jhon Doe</h3>
            <p>Digital Marketing Manager</p>
          </TeamDesc>
        </Team>
        <Team>
          <img src={team2} alt="A team" />
        </Team>
        <Team>
          <img src={team3} alt="A team" />
        </Team>
        <Team>
          <img src={team4} alt="A team" />
        </Team>
      </Wrapper>
    </Container>
  );
};

export default OurTeam;
