import React from 'react';
import uuid from 'uuid';
import { testDataObj } from '../../utils/challenges';

const Challenges = () => {
  const array = Object.values(testDataObj);
  return array.map(challenge => (
    <div key={uuid()}>
      <h2>{challenge.name}</h2>
      <p>{challenge.difficulty}</p>
    </div>
  ));
};

export default Challenges;
