import React, { useState } from 'react';
import uuid from 'uuid';
import styled from 'styled-components';
import Pagination from 'antd/lib/pagination';
import { testDataObj } from '../../utils/challenges';
import ChallengeCard from '../../components/Cards/ChallengeCard';

const StyledChallenges = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .pagination {
    margin: 2rem 0 1rem 0;
    padding: 0;
    .ant-pagination-item-active {
      border-color: #4fad65;
    }
    .ant-pagination-item-active a {
      color: #4fad65;
    }
  }
`;

const Challenges = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(5);

  const handlePagination = value => {
    if (value <= 1) {
      setMinValue(0);
      setMaxValue(5);
    } else {
      setMinValue(value * 5 - 5);
      setMaxValue(value * 5);
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
      <div className='pagination'>
        <Pagination
          defaultCurrent={1}
          defaultPageSize={5}
          onChange={handlePagination}
          total={makeToArray.length}
        />
      </div>
    </StyledChallenges>
  );
};

export default Challenges;
