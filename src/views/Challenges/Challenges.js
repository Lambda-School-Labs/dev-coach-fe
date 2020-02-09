import React from 'react';
import { testDataObj } from '../../utils/challenges';

const Challenges = () => {
  const array = Object.values(testDataObj);
  return array.map(challenge => (
    <div>
      <h2>{challenge.name}</h2>
      <p>{challenge.state}</p>
    </div>
  ));
};

export default Challenges;
