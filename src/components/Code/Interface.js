/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  Button,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from '@material-ui/core';
import {
  mapLanguageToEditorState,
  logCode,
  runAllCode,
} from '../../utils/executionHelpers';
import { testDataObj } from '../../utils/challenges';

import devices from '../../utils/devices';

const InterfaceContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .run-button {
    margin-top: 1em;
  }

  .title {
    color: #595959;
    font-size: 2rem;
    font-weight: 500;
  }

  .form-control {
    width: 30%;
  }

  .input-label {
    @media ${devices.mobile} {
      display: none;
    }
  }
`;

const Interface = ({
  setOutput,
  language,
  setLanguage,
  editorState,
  setEditorState,
  currentTest,
  // setCurrentTest,
}) => {
  const handlePost = () => {
    setOutput('');
    if (currentTest) {
      setOutput(`Running tests...\n\n`);
      runAllCode(currentTest, language, editorState, setOutput);
    } else {
      logCode(editorState, language, setOutput);
    }
  };

  const handleLanguageSelection = event => {
    setLanguage(event.target.value);
    setEditorState(
      currentTest
        ? testDataObj[currentTest][event.target.value]
        : mapLanguageToEditorState(event.target.value),
    );
  };

  // const handleTestSelection = event => {
  //   const selectedTest = event.target.value;
  //   setCurrentTest(selectedTest);
  //   if (testDataObj[selectedTest]) {
  //     setEditorState(testDataObj[selectedTest][language]);
  //   }
  // };

  React.useEffect(() => {
    function handlekeydownEvent(event) {
      if (event.keyCode === 13 && event.ctrlKey) {
        logCode(editorState, language, setOutput);
      }
    }

    document.addEventListener('keyup', handlekeydownEvent);
    return () => {
      document.removeEventListener('keyup', handlekeydownEvent);
    };
  }, [editorState, language, setOutput]);

  return (
    <InterfaceContainer>
      <h1 className='title'>DevCoach IDE</h1>
      <FormControl className='form-control'>
        <InputLabel className='input-label'>
          Select Programming Language
        </InputLabel>
        <Select value={language} onChange={handleLanguageSelection}>
          <MenuItem value='javascript'>Javascript</MenuItem>
          <MenuItem value='python'>Python</MenuItem>
          <MenuItem value='java'>Java</MenuItem>
          <MenuItem value='c'>C</MenuItem>
          <MenuItem value='cpp'>C++</MenuItem>
          <MenuItem value='haskell'>Haskell</MenuItem>
          <MenuItem value='go'>Go</MenuItem>
          <MenuItem value='rust'>Rust</MenuItem>
        </Select>
      </FormControl>

      {/* <FormControl className='form-control'>
        <InputLabel className='input-label'>
          Select Coding Challenge
        </InputLabel>
        <Select
          disabled={
            language !== 'javascript' && language !== 'python'
          }
          value={currentTest}
          onChange={handleTestSelection}
        >
          {' '}
          <MenuItem value=''>None</MenuItem>
          <MenuItem value='square'>Square a number</MenuItem>
          <MenuItem value='add'>Add two numbers</MenuItem>
          <MenuItem value='reverseAString'>Reverse a string</MenuItem>
          <MenuItem value='sortString'>SortString</MenuItem>
          <MenuItem value='rockPaperScissors'>
            Rock Paper Scissors
          </MenuItem>
          <MenuItem value='fibonacci'>Fibonacci</MenuItem>
          <MenuItem value='anagram'>Anagram</MenuItem>
          <MenuItem value='isArmstrongNumber'>
            IsArmstrongNumber
          </MenuItem>
          <MenuItem value='balancedBrackets'>
            Balanced Bracket
          </MenuItem>
          <MenuItem value='romanNumeralize'>
            Roman Numeralize
          </MenuItem>
          <MenuItem value='collatzSequence'>
            Collatz Sequence
          </MenuItem>
          <MenuItem value='vowelCount'>Vowel Count</MenuItem>
          <MenuItem value='islandCount'>Island Count</MenuItem>
        </Select>
      </FormControl> */}

      <Button className='run-button' onClick={handlePost}>
        Run Code
      </Button>
    </InterfaceContainer>
  );
};

export default connect(state => state)(Interface);
