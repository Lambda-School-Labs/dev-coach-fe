import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import CoachModal from './Modals/CoachModal';

const StyledCoachCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 17rem;
  height: 22rem;
  padding: 2.4rem;
  border: 1px solid #dadce0;
  border-radius: 0.8rem;
  margin: 0.5rem;
  color: #595959;
  font-weight: 300;
  text-align: left;

  h3 {
    font-weight: 400;
    font-size: 1rem;
    color: #3c4043;
  }

  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    .header-text {
      width: 100%;
    }

    .header-photo {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .picture {
        width: 5rem;
        height: 5rem;
      }
    }
  }

  .bullet-points {
  }

  .description {
  }

  .footer {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    .button {
      background-color: #4fad65;
      font-weight: 200;
    }
  }
`;

const CoachCard = props => {
  const { coach } = props;
  return (
    <StyledCoachCard>
      <div className='header'>
        <div className='header-text'>
          <h3>{`${coach.first_name} ${coach.last_name}`}</h3>
          <p>${coach.hourly_rate} per hour</p>
        </div>
        <div className='header-photo'>
          <Avatar
            className='picture'
            alt='Coach'
            src={coach.avatar_url}
          />
        </div>
      </div>

      <div className='bullet-points'>
        <p>
          <i className='fas fa-map-marker-alt' />
          {coach.location}
        </p>
        <p>
          <i className='fas fa-street-view' />{' '}
          {coach.experience_level === 3
            ? 'Expert in interviewing'
            : coach.experience_level === 2
            ? 'Advanced in interviewing'
            : 'Beginner in interviewing'}
        </p>
      </div>

      <div className='description'>
        <p>{`${coach.description.slice(0, 50)}...`}</p>{' '}
        <CoachModal
          firstName={coach.first_name}
          lastName={coach.last_name}
          description={coach.description}
        />
      </div>

      <div className='footer'>
        <Button
          className='button'
          variant='contained'
          color='primary'
        >
          Request
        </Button>
      </div>
    </StyledCoachCard>
  );
};

export default CoachCard;
