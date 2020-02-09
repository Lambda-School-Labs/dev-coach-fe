import React from 'react';
import uuid from 'uuid';
import styled from 'styled-components';
import { testDataObj } from '../../utils/challenges';

const StyledChallenges = styled.div`
  display: flex;
  flex-direction: column;
`;

const Challenges = () => {
  const makeToArray = Object.values(testDataObj);
  return (
    <StyledChallenges>
      {makeToArray.map(challenge => (
        <div key={uuid()}>
          <h2>{challenge.name}</h2>
          <p>{challenge.difficulty}</p>
        </div>
      ))}
    </StyledChallenges>
  );
};

export default Challenges;
