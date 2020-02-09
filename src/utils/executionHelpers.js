/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-multi-str */
import Axios from 'axios';

export const testDataObj = {
  square: {
    state: `function square(x) {
  // enter code below to return the square of a number
}
    `,
    testData: [
      { testCase: 5, testResult: 25 },
      { testCase: 10, testResult: 100 },
      { testCase: 2348, testResult: 5513104 },
    ],
  },
  add: {
    state: `function add (x, y) {
  // enter code below to add two numbers and return the sum
}
    `,
    testCases: [
      [1, 2],
      [345, 829],
      [384724323, 23948293819],
    ],
    testResults: [3, 1174, 24333018142],
    testData: [
      { testCase: [1, 2], testResult: 3 },
      { testCase: [345, 829], testResult: 1174 },
      { testCase: [384724323, 23948293819], testResult: 24333018142 },
    ],
  },
  reverseAString: {
    state: `function reverseAString(str) {
  // enter code below to take a string as input 
  // and return the same string, reversed.
}
    `,
    testData: [
      { testCase: 'Hello, world!', testResult: '!dlrow ,olleH' },
      { testCase: 'Lor3m 1psum', testResult: 'musp1 m3roL' },
      {
        testCase: 'Welcome to DevCoach.com!',
        testResult: '!moc.hcaoCveD ot emocleW',
      },
    ],
  },
  rockPaperScissors: {
    state: `function rockPaperScissors(numOfRounds) {
/* Write a function called rockPaperScissors that will take a number, and output "n" number of possible combinations of 'rock', 'paper', and 'scissors. */
}`,
    testData: [
      {
        testCase: 1,
        testResult: [['rock'], ['paper'], ['scissors']],
      },
      {
        testCase: 2,
        testResult: [
          ['rock', 'rock'],
          ['rock', 'paper'],
          ['rock', 'scissors'],
          ['paper', 'rock'],
          ['paper', 'paper'],
          ['paper', 'scissors'],
          ['scissors', 'rock'],
          ['scissors', 'paper'],
          ['scissors', 'scissors'],
        ],
      },
      {
        testCase: 3,
        testResult: [
          ['rock', 'rock', 'rock'],
          ['rock', 'rock', 'paper'],
          ['rock', 'rock', 'scissors'],
          ['rock', 'paper', 'rock'],
          ['rock', 'paper', 'paper'],
          ['rock', 'paper', 'scissors'],
          ['rock', 'scissors', 'rock'],
          ['rock', 'scissors', 'paper'],
          ['rock', 'scissors', 'scissors'],
          ['paper', 'rock', 'rock'],
          ['paper', 'rock', 'paper'],
          ['paper', 'rock', 'scissors'],
          ['paper', 'paper', 'rock'],
          ['paper', 'paper', 'paper'],
          ['paper', 'paper', 'scissors'],
          ['paper', 'scissors', 'rock'],
          ['paper', 'scissors', 'paper'],
          ['paper', 'scissors', 'scissors'],
          ['scissors', 'rock', 'rock'],
          ['scissors', 'rock', 'paper'],
          ['scissors', 'rock', 'scissors'],
          ['scissors', 'paper', 'rock'],
          ['scissors', 'paper', 'paper'],
          ['scissors', 'paper', 'scissors'],
          ['scissors', 'scissors', 'rock'],
          ['scissors', 'scissors', 'paper'],
          ['scissors', 'scissors', 'scissors'],
        ],
      },
    ],
  },
  fibonacci: {
    state: `function fibonacci(n) {
// Given an integer n, calculate the first n numbers in the fibonacci sequence. Return the numbers in an array.
}`,
    testData: [
      {
        testCase: 8,
        testResult: `[
  0, 1, 1,  2,
  3, 5, 8, 13
]`,
      },
      {
        testCase: 50,
        testResult: `[
          0,          1,          1,          2,
          3,          5,          8,         13,
         21,         34,         55,         89,
        144,        233,        377,        610,
        987,       1597,       2584,       4181,
       6765,      10946,      17711,      28657,
      46368,      75025,     121393,     196418,
     317811,     514229,     832040,    1346269,
    2178309,    3524578,    5702887,    9227465,
   14930352,   24157817,   39088169,   63245986,
  102334155,  165580141,  267914296,  433494437,
  701408733, 1134903170, 1836311903, 2971215073,
 4807526976, 7778742049
]`,
      },
    ],
  },
  sortString: {
    state: `function sortString(str) {
  // write a function that takes a string of letters and 
  // returns a string with the letters sorted in alphabetical order.

}
    `,
    testData: [
      { testCase: 'zyx', testResult: 'xyz' },
      { testCase: 'fedcba', testResult: 'abcdef' },
      { testCase: 'vul', testResult: 'luv' },
    ],
  },
  isArmstrongNumber: {
    state: `function isArmstrongNumber(n) {
  // An Armstrong number is an n-digit number that is equal to the sum of the n'th powers of its digits.
  // Determine if the input number is an Armstrong number.  Return either true or false .

  // For example with the number 153 there are 3 digits so you would add together the cubed
  // values of all the digits like this: 1^3 + 5^3 + 3^3 === 153 

}
    `,
    testData: [
      { testCase: 6, testResult: 'true' },
      { testCase: 153, testResult: 'true' },
      { testCase: 351, testResult: 'false' },
    ],
  },
  fizzBuzz: {
    state: `function fizzBuzz(num) {
     // Write a function that does the following:

     // console logs the numbers from 1 to n, where n 
     // is the integer the function takes as its parameter
     // logs fizz instead of the number for multiples of 3
     // logs buzz instead of the number for multiples of 5
     // logs fizzbuzz for numbers that are multiples of both 3 and 5

}
    `,
    testData: [
      {
        testCase: 3,
        testResult: `[1, 2, 'fizz']`,
      },
      { testCase: 5, testResult: `[1, 2, 'fizz', 4, 'buzz']` },
      {
        testCase: 15,
        testResult: `[
          1,
          2,
          'fizz',
          4,
          'buzz',
          'fizz',
          7,
          8,
          'fizz',
          'buzz',
          11,
          'fizz',
          13,
          14,
          'fizzbuzz',
        ]`,
      },
    ],
  },
  anagram: {
    state: `function anagram(a,b) {
  // A word is an anagram of another word if both use the same letters 
  // in the same quantity, but arranged differently.

  // write a function that checks if two provided strings 
  // are anagrams of each other; letter casing shouldn’t matter. 
  //  Also, consider only characters, not spaces or punctuation.
  // For example: anagram('this', 'that') -> false anagram('fired', 'fried') -> true

}`,
    testData: [
      { testCase: `['hello', 'bye']`, testResult: 'false' },
      { testCase: `['finder', 'friend']`, testResult: 'true' },
      { testCase: `['listen', 'silent']`, testResult: 'true' },
    ],
  },
  balancedBrackets: {
    state: `function balancedBrackets(str) {
// Write a function balancedBrackets that accepts
// a string and returns true if all types of brackets 
// are balanced and false otherwise.    
// ignore other characters
  
// Examples:
//  balancedBrackets('[({})]');   // true
//  balancedBrackets('[(]{)}'); // false
//  balancedBrackets(' const obj  = { x: someFunction() }'); // true

}`,
    testData: [
      { testCase: '[({})]', testResult: 'true' },
      { testCase: '[(]{)}', testResult: 'false' },
      {
        testCase: ' const obj  = { x: someFunction() }',
        testResult: 'true',
      },
    ],
  },
  romanNumeralize: {
    state: `function romanNumeralize(n) {
// Define a function that takes in a positive integer
// and returns the Roman Numeral representation of that number.  

// Symbol    Value
// I         1
// IV        4
// V         5
// IX        9
// X         10
// XL        40
// L         50
// XC        90
// C         100
// CD        400
// D         500
// CM        900
// M         1,000 

  // Example: romanNumeralize(1973) should return 'MCMLXXIII'.
}`,
    testData: [
      { testCase: 1973, testResult: 'MCMLXXIII' },
      { testCase: 2593, testResult: 'MMDXCIII' },
      { testCase: 3123, testResult: 'MMMCXXIII' },
    ],
  },
  collatzSequence: {
    state: `function collatzSequence(num){
// Write a function which takes a positive integer number
// as an argument and returns it's "Collatz chain".
// The Collatz chain will stop at one. Named  after Lothar
// Collatz, the "Collatz conjecture" defines a sequence
// of numbers. That sequence is the Collatz "chain". 
// Starting with a positive integer, the Collatz conjecture
// determines the next integer in the chain until the number
// 1 is obtained.Your Collatz algorithm will evaluate the 
// integer and then, depending on the condition of the integer,
// perform the following tasks: If the integer is even, 
// then halve the number. If the integer is not even, then
// multiply it by 3 and add one. An example chain starting
// from the number 23 looks like this:
//[23, 70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1]
//Boldface signifies the odd numbers.
}`,
    testData: [
      {
        testCase: 23,
        testResult: [
          23,
          70,
          35,
          106,
          53,
          160,
          80,
          40,
          20,
          10,
          5,
          16,
          8,
          4,
          2,
          1,
        ],
      },
      {
        testCase: 44,
        testResult: [
          44,
          22,
          11,
          34,
          17,
          52,
          26,
          13,
          40,
          20,
          10,
          5,
          16,
          8,
          4,
          2,
          1,
        ],
      },
      {
        testCase: 86,
        testResult: [
          86,
          43,
          130,
          65,
          196,
          98,
          49,
          148,
          74,
          37,
          112,
          56,
          28,
          14,
          7,
          22,
          11,
          34,
          17,
          52,
          26,
          13,
          40,
          20,
          10,
          5,
          16,
          8,
          4,
          2,
          1,
        ],
      },
    ],
  },
  vowelCount: {
    state: `function vowelCount(str) {
// Write a function which counts the number of
// vowels in a given string. Return the count number.
// Passing the string "Hello world!" as an argument 
// to your vowelCount() function would result
// in the number 3 being returned.
}`,
    testData: [
      {
        testCase: '-bcd-fgh-jklmn-pqrst-vwxyz',
        testResult: 0,
      },
      {
        testCase: 'e quic bron foumped ove the lazy do.',
        testResult: 12,
      },
      {
        testCase: 'A I have everanted iso be an Uberriver!',
        testResult: 16,
      },
    ],
  },
};

// export const invokeCode = (code, testCase, value, language) => {
//   if (language === 'javascript') {
//     if (value) {
//       return `
//       ${code}
//       console.log(${testCase}(${value}));
//       `;
//     }
//     return `
//       ${code}
//       console.log(${testCase}());
//       `;
//   }
//   if (language === 'python') {
//     if (value) {
//       return `${code}\nprint(${testCase}(${value}))
//       `;
//     }
//     return `${code}\nprint(${testCase}())`;
//   }
// };

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

// export function executeCode(testName, value, editorState, language) {
//   if (typeof value === 'string') {
//     value = `'${value}'`;
//   }
//   return Axios.post('https://api.judge0.com/submissions?wait=false', {
//     source_code: `${invokeCode(
//       editorState,
//       testName,
//       value,
//       language,
//     )}`,
//     language_id: `${mapLanguageToId(language)}`,
//   });
// }

// export function fetchExecutedCode(token) {
//   return Axios.get(`https://api.judge0.com/submissions/${token}`);
// }

// export async function runAllCode(
//   currentTest,
//   language,
//   editorState,
//   setOutput,
// ) {
//   const { testData } = testDataObj[currentTest];
//   const testCaseArr = testData.map(el => el.testCase);
//   const testResultsArr = testData.map(el => el.testResult);
//   const passedTestsArr = [];
//   for (const [idx, el] of testCaseArr.entries()) {
//     const executedCode = await executeCode(
//       currentTest,
//       el,
//       editorState,
//       language,
//     );
//     const { token } = executedCode.data;
//     setTimeout(async () => {
//       const response = await fetchExecutedCode(token);
//       let output = response.data.stdout;
//       if (
//         typeof testResultsArr[idx] === 'string' &&
//         response.data.stdout
//       ) {
//         output = response.data.stdout.substring(
//           0,
//           response.data.stdout.length - 1,
//         );
//       }
//       // eslint-disable-next-line eqeqeq
//       if (output === testResultsArr[idx]) {
//         passedTestsArr.push('true');
//       }
//       setOutput(
//         prevOutput =>
//           `${prevOutput}Test ${idx + 1}: expected ${currentTest}(${
//             testCaseArr[idx]
//           }) to equal ${
//             testResultsArr[idx]
//           }.\nResult: ${currentTest}(${
//             testCaseArr[idx]
//           }) returns ${output}\n\n`,
//       );
//       if (
//         idx === testCaseArr.length - 1 &&
//         passedTestsArr.length === testCaseArr.length
//       ) {
//         setOutput(
//           prevOutput => `${prevOutput}\nAll tests passed! Good job.`,
//         );
//       } else if (
//         idx === testCaseArr.length - 1 &&
//         passedTestsArr.length < testCaseArr.length
//       ) {
//         setOutput(
//           prevOutput =>
//             `${prevOutput}\nTests failing, check your code!`,
//         );
//       }
//     }, 2000);
//   }
// }

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
    const h = testResultsArr[idx];
    debugger;
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
      debugger;
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
        debugger;
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
