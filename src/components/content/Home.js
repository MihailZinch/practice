import styled from 'styled-components';

import { colors } from '../../styles.js';
const { firstTextColor, secondTextColor, firstBackgroudColor, thirdTextColor } = colors;

const Home = ({
  theme = 'first'
}) => {
  const themeMap = {
    first: DefaultHomeWrapper,
    second: DefaultHomeWrapper,
    third: DefaultHomeWrapper
  };

  const HomeWrapper = themeMap[theme];

  return (
    <HomeWrapper>
      <h1>A new generation of modern games and applications</h1>
      <div className="about applications">
        <p>
          A modern application covers use cases that include web and mobile backends, IoT applications, 
          AI/ML workloads, batch processing, shared services platforms, microservice backends, and more. 
          Developers and IT organizations build them with a combination of modular architecture patterns, 
          serverless operational models, DevOps, DevSecOps, low-code, and agile development processes. 
          A modern application is an answer to the slow, ponderous, and long release times of monolithic 
          software because it offers greater scalability, portability, resiliency, and agility.
        </p>
      </div>

      <div className="about games">
        <p>
          Gaming is one of the most popular computer activities. New technologies are constantly arriving 
          to make it possible to develop better and more powerful games that can be run in any standards-compliant 
          web browser.
        </p>
      </div>
    </HomeWrapper>
  );
};

const DefaultHomeWrapper = styled.div``;

const SimpleHomeWrapper = styled.div`
  h1 {
    color: red;
    margin: 50px;
  }

  .about {
    width: 50%;
    margin: 20px auto;
    padding: 20px;
    font-size: 20px;

    &.applications {
      color: ${firstTextColor};
      border: 1px solid ${firstTextColor};
    }

    &.games {
      color: ${thirdTextColor};
      border: 1px solid ${thirdTextColor};
    }
  }
`;

export default Home;
