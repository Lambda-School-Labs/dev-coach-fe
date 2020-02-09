import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const StyledChallengeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 17rem;
  height: 24rem;
  padding: 1.5rem;
  border-radius: 0.8rem;
  margin: 0.5rem;
  color: #595959;
  font-weight: 300;
  text-align: left;
  background: white;
  box-shadow: 0 6px 10px #d3d3d3;

  .book-button {
    background-color: #4fad65;
    color: white;
  }
`;

export const ChallengeCard = props => {
  const { name, difficulty, chooseChallenge } = props;
  return (
    <StyledChallengeCard>
      <div className='header'>
        <h2>{name}</h2>
      </div>
      <div className='content'>
        <h2>{difficulty}</h2>
        <Link to='/challenge' onClick={chooseChallenge}>
          <Button
            className='button'
            variant='contained'
            color='primary'
            // endIcon={<ShoppingCartIcon />}
          >
            Solve Challenge
          </Button>
        </Link>
      </div>
    </StyledChallengeCard>
  );
};

export default ChallengeCard;
