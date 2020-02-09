/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-multi-str */
import Axios from 'axios';
import { testDataObj } from './challenges';

export const invokeCode = (code, testCase, value, language) => {
  if (language === 'javascript') {
    if (value) {
      return `
      ${code}
      console.log(${testCase}(${value}));
      `;
    }
    return `
      ${code}
      console.log(${testCase}());
      `;
  }
  if (language === 'python') {
    if (value) {
      return `${code}\nprint(${testCase}(${value}))
      `;
    }
    return `${code}\nprint(${testCase}())`;
  }
};

export const mapLanguageToId = language => {
  switch (language) {
    default:
      return 63;
    case 'javascript':
      return 63;
    case 'python':
      return 71;
    case 'java':
      return 62;
    case 'c':
      return 50;
    case 'cpp':
      return 54;
    case 'haskell':
      return 61;
    case 'go':
      return 60;
    case 'rust':
      return 73;
  }
};

export function logCode(editorState, language, setOutput) {
  Axios.post('https://api.judge0.com/submissions?wait=false', {
    source_code: `${editorState}`,
    language_id: `${mapLanguageToId(language)}`,
  })
    .then(res => {
      setTimeout(() => {
        Axios.get(
          `https://api.judge0.com/submissions/${res.data.token}`,
        )
          .then(res => {
            if (res.data.stdout) {
              setOutput(`${res.data.stdout}`);
            } else if (res.data.compile_output) {
              setOutput(res.data.compile_output);
            } else if (res.data.stderr) {
              setOutput(res.data.stderr);
            } else {
              setOutput('Unable to run code');
            }
          })
          .catch(err => {});
      }, 2000);
    })
    .catch(err => {});
}

export function executeCode(
  testName,
  value,
  editorState,
  language,
  expected_output,
) {
  if (typeof value === 'string') {
    value = `'${value}'`;
  }
  return Axios.post('https://api.judge0.com/submissions?wait=false', {
    source_code: `${invokeCode(
      editorState,
      testName,
      value,
      language,
    )}`,
    language_id: `${mapLanguageToId(language)}`,
    expected_output,
  });
}

export function fetchExecutedCode(token) {
  return Axios.get(`https://api.judge0.com/submissions/${token}`);
}

export async function runAllCode(
  currentTest,
  language,
  editorState,
  setOutput,
) {
  const { testData } = testDataObj[currentTest];
  const testCaseArr = testData.map(el => el.testCase);
  const testResultsArr = testData.map(el => el.testResult);
  const passedTestsArr = [];
  for (const [idx, el] of testCaseArr.entries()) {
    const executedCode = await executeCode(
      currentTest,
      el,
      editorState,
      language,
      testResultsArr[idx],
    );
    const { token } = executedCode.data;
    setTimeout(async () => {
      const response = await fetchExecutedCode(token);
      let output = response.data.stdout;
      if (
        typeof testResultsArr[idx] === 'string' &&
        response.data.stdout
      ) {
        output = response.data.stdout.substring(
          0,
          response.data.stdout.length - 1,
        );
      }
      // eslint-disable-next-line eqeqeq
      if (response.data.status.description === 'Accepted') {
        passedTestsArr.push('true');
      }
      setOutput(
        prevOutput =>
          `${prevOutput}Test ${idx + 1}: expected ${currentTest}(${
            testCaseArr[idx]
          }) to equal ${
            testResultsArr[idx]
          }.\nResult: ${currentTest}(${
            testCaseArr[idx]
          }) returns ${output}\n\n`,
      );
      if (
        idx === testCaseArr.length - 1 &&
        passedTestsArr.length === testCaseArr.length
      ) {
        setOutput(
          prevOutput => `${prevOutput}\nAll tests passed! Good job.`,
        );
      } else if (
        idx === testCaseArr.length - 1 &&
        passedTestsArr.length < testCaseArr.length
      ) {
        setOutput(
          prevOutput =>
            `${prevOutput}\nTests failing, check your code!`,
        );
      }
    }, 2000);
  }
}

const javascriptInitialEditorState = `console.log('hello JS!');`;

const pythonInitialEditorState = `print('hello, python!)`;

const cppInitialState = `#include <iostream>

int main() {
    std::cout << "hello, c++!" << std::endl;
    return 0;
}
`;

const javaInitialState = `public class Main {
  public static void main(String[] args) {
      System.out.println("hello, java!");
  }
}
`;

const haskellInitialState = `main :: IO ()
main = putStrLn "Hello, Haskell!"`;

const goInitialState = `package main
import "fmt"

func main() {
    fmt.Println("hello Go!")
}
`;

const rustInitialState = `fn main() {
  println!("hello Rust!");
}
`;

const cInitialState = `/* sample program: print pascal's triangle */\n#include<stdio.h>
int main() {
    int rows = 10, coef=1, space, i, j;
    for (i=0; i<rows; i++) {
        for (space=1; space <= rows-i; space++)
            printf("  ");
        for (j=0; j<=i; j++) {
            if (j==0 || i==0)
                coef = 1;
            else
                coef=coef*(i-j+1)/j;
            printf("%4d", coef);
        }
        printf("\\n");
    }
    return 0;
}
`;

export const mapLanguageToEditorState = (language, editorState) => {
  switch (language) {
    default:
      return javascriptInitialEditorState;
    case 'javascript':
      return javascriptInitialEditorState;
    case 'python':
      return pythonInitialEditorState;
    case 'c':
      return cInitialState;
    case 'cpp':
      return cppInitialState;
    case 'java':
      return javaInitialState;
    case 'haskell':
      return haskellInitialState;
    case 'go':
      return goInitialState;
    case 'rust':
      return rustInitialState;
  }
};

export const mapLanguageToMode = language => {
  switch (language) {
    default:
      return language;
    case 'java':
      return 'clike';
    case 'cpp':
      return 'clike';
    case 'c':
      return 'clike';
  }
};

export function formatIfArr(data) {
  return Array.isArray(data) ? data.join(',') : data;
}
