import React, { useState } from 'react';
import uuid from 'uuid';
import styled from 'styled-components';
import Pagination from 'antd/lib/pagination';
import Button from '@material-ui/core/Button';
import { testDataObj } from '../../utils/challenges';
import ChallengeCard from '../../components/Cards/ChallengeCard';
import Editor from '../../components/Code/Editor';
import Interface from '../../components/Code/Interface';
import Terminal from '../../components/Code/Terminal';

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

const StyledChallenge = styled.div`
  display: flex;
  flex-direction: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 75vh;
  width: 80vw;

  .explanation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .button {
    background-color: #4fad65;
    color: white;
  }

  * {
    font-family: 'Inconsolata', sans-serif;
  }

  .code-header-container {
    height: 12%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 2em;
  }

  .code-body-container {
    height: 70%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const Challenges = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(5);
  const [challenge, setChallenge] = useState(null);

  const [editorState, setEditorState] = React.useState();
  const [output, setOutput] = React.useState('');
  const [language, setLanguage] = React.useState('javascript');
  const [currentTest, setCurrentTest] = React.useState('');
  const [testPassedCount, setTestPassedCount] = React.useState(0);

  const handlePagination = value => {
    if (value <= 1) {
      setMinValue(0);
      setMaxValue(5);
    } else {
      setMinValue(value * 5 - 5);
      setMaxValue(value * 5);
    }
  };

  const goBack = () => {
    setChallenge(null);
  };

  const makeToArray = Object.values(testDataObj);

  if (challenge) {
    return (
      <StyledChallenge>
        <div className=''>
          <h2>{challenge}</h2>
          <p>{testDataObj[currentTest].description}</p>
          <Button
            onClick={goBack}
            className='button'
            variant='contained'
            color='primary'
          >
            Back
          </Button>
        </div>
        <div className='code-header-container'>
          <Interface
            editorState={editorState}
            setEditorState={setEditorState}
            output={output}
            setOutput={setOutput}
            language={language}
            setLanguage={setLanguage}
            currentTest={currentTest}
            testPassedCount={testPassedCount}
            setTestPassedCount={setTestPassedCount}
          />
        </div>
        <div className='code-body-container'>
          <Editor
            output={output}
            setOutput={setOutput}
            editorState={editorState}
            setEditorState={setEditorState}
            language={language}
            setLanguage={setLanguage}
          />
          <Terminal initialText='$  ' output={output} />
        </div>
      </StyledChallenge>
    );
  }
  return (
    <StyledChallenges>
      {makeToArray.slice(minValue, maxValue).map(challenge => (
        <ChallengeCard
          key={uuid()}
          difficulty={challenge.difficulty}
          name={challenge.name}
          chooseChallenge={() => {
            setChallenge(challenge.name);
            setEditorState(challenge.javascript);
            setCurrentTest(challenge.id);
          }}
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
