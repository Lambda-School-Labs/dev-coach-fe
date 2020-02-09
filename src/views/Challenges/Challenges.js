import React, { useState } from 'react';
import uuid from 'uuid';
import styled from 'styled-components';
import Pagination from 'antd/lib/pagination';
import { testDataObj } from '../../utils/challenges';
import ChallengeCard from '../../components/Cards/ChallengeCard';

const StyledChallenges = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Challenges = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(6);

  const handlePagination = value => {
    if (value <= 1) {
      setMinValue(0);
      setMaxValue(6);
    } else {
      setMinValue(value * 6 - 6);
      setMaxValue(value * 6);
    }
  };
  const makeToArray = Object.values(testDataObj);
  return (
    <StyledChallenges>
      {makeToArray.slice(minValue, maxValue).map(challenge => (
        <ChallengeCard
          key={uuid()}
          difficulty={challenge.difficulty}
          name={challenge.name}
        />
      ))}
      <Pagination
        defaultCurrent={1}
        defaultPageSize={6}
        onChange={handlePagination}
        total={makeToArray.length}
      />
    </StyledChallenges>
  );
};

export default Challenges;
