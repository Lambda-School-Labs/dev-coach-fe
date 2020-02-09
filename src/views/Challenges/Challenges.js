import React from 'react';
import uuid from 'uuid';
import styled from 'styled-components';
import { testDataObj } from '../../utils/challenges';
import ChallengeCard from '../../components/Cards/ChallengeCard';

const StyledChallenges = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Challenges = () => {
  const makeToArray = Object.values(testDataObj);
  return (
    <StyledChallenges>
      {makeToArray.map(challenge => (
        <ChallengeCard
          key={uuid()}
          difficulty={challenge.difficulty}
          name={challenge.name}
        />
      ))}
    </StyledChallenges>
  );
};

export default Challenges;
