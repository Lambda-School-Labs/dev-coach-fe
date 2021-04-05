# DevCoach Frontend

[![Maintainability](https://api.codeclimate.com/v1/badges/56b615d2c655c7c1cfd7/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/dev-coach-fe/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/56b615d2c655c7c1cfd7/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/dev-coach-fe/test_coverage)

## Project Overview

DevCoach provides a platform for junior developers to train and improve their skills efficiently through focused support and feedback. It allows developers to sign up, book coaches, communicate with them over instant messaging and video chat, and work collaboratively on coding challenges. It was built by Mandi, Anna, David, Jose and Dallas for their Lambda School Labs project.

See the deployed product at [dev-coach.com](https://www.dev-coach.com). We would love to hear your feedback - you can use the chatbox in the bottom right of the screen, or message a member of the team on Slack.

Look through the documents we used to plan and organise the project here:

- [Notion Document](https://www.notion.so/Dev-Coach-com-503a434aa6b4425595d2b4fa03a1d4066)

- [Trello Board](https://trello.com/b/3qTuFm1A/labspt10-dev-coach)

# Team

Team Lead: [Olga Cortez](https://github.com/OlgaCortez) | [Mandi Hamza](https://github.com/Mandihamza)  | [Anna Morris](https://github.com/clay-most) | [David York](https://github.com/daetor2012)| [Jose Reinoso](https://github.com/JoseAReinoso) | [Dallas James](https://github.com/dallasjames)<br>
| --- | --- | --- | --- | --- | --- |
[<img src="https://ca.slack-edge.com/ESZCHB482-W012JPZ6T7D-09640f43d85b-512" />](https://github.com/OlgaCortez) | [<img src="https://ca.slack-edge.com/ESZCHB482-W012X6Q8A2D-b5b9c1aaebd2-512" />](https://github.com/Mandihamza) | [<img src="https://ca.slack-edge.com/ESZCHB482-W012BRJCQKY-9c8cf939bd58-512" />](https://github.com/clay-most) | [<img src="https://ca.slack-edge.com/ESZCHB482-W0123RMKS15-3ae81857cd67-512" />](https://github.com/daetor2012) | [<img src="https://ca.slack-edge.com/ESZCHB482-W012JHT2N02-6c13efc5d241-512" />](https://github.com/JoseAReinoso) | [<img src="https://ca.slack-edge.com/ESZCHB482-W012JHRKY0J-69d20df3f3c3-512" />](https://github.com/dallasjames)
[<img src="https://github.com/favicon.ico" width="15" />](https://github.com/OlgaCortez) | [<img src="https://github.com/favicon.ico" width="15">](https://github.com/Mandihamza) | [<img src="https://github.com/favicon.ico" width="15" >](https://github.com/clay-most) | [<img src="https://github.com/favicon.ico" width="15" />](https://github.com/daetor2012) | [<img src="https://github.com/favicon.ico" width="15" />](https://github.com/JoseAReinoso) | [<img src="https://github.com/favicon.ico" width="15" />](https://github.com/dallasjames)

# Table of Contents

## How to run this application

To run this project, you'll need to have Node installed on your machine. It accepts the usual scripts for a [create-react-app](https://github.com/facebook/create-react-app). You'll also need to create an environment variable for the server URL, see below for how to do this.

```
git clone https://github.com/Lambda-School-Labs/dev-coach-fe.git
cd dev-coach-fe
npm i
echo "REACT_APP_BASE_URL='http://devcoahbeenv-env.eba-ft322mee.us-east-1.elasticbeanstalk.com/'" > .env
npm start // starts the app on port :3000
```
Other scripts:
```
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

## Tech-Stack

This project was bootstrapped with Create-React-App and its UI was built primarily with React, with Axios for API calls, Redux for state management, Redux-Thunk for handling asynchronous actions, and Redux-Logger for debugging state changes. Routing was handled with React Router. Our styling used CSS-in-JS, primarily styled-components but with some forms making use of Material-UI components. We deployed with Netlify.


Other libraries we used:

 - Formik (form handling)
 - Yup (form validation) 
 - Stripe (payments)
 - Recharts (data visualization)
 - Purechat (instant messaging and code sharing over WebSockets)
 - Twilio-Video (WebRTC-based video chat)
 - React-Codemirror2 (extensible code editor)
 - Judge0 (remote code execution API)
 - Jest (for testing)
 
## Backend

For information on the backend of the app, please see [here](https://github.com/Lambda-School-Labs/dev-coach-be).

## Directory structure

```
src
├───components
|   |───About
|   |   |───How
|   |   |───img
|   |   |───Search
|   |   └───Testimonials
│   ├───Booking
│   ├───Cards
│   ├───Chat
│   ├───Code
│   ├───DataVisualization
│   ├───FAQ
│   ├───Inputs
│   ├───Interview
│   ├───Landing
│   │   ├───Footer
│   │   ├───Header
│   │   ├───img
│   │   └───Navigation
│   ├───Modals
│   ├───Notifications
│   ├───Onboarding
│   │   └───Login
│   ├───Reschedule
│   └───Settings
├───img
├───state
│   ├───actions
│   └───reducers
├───utils
└───views
    ├───Code
    ├───Feedback
    ├───Interview
    ├───Marketplace
    ├───Settings
    └───UserDashboard
```

# Contributing

If you're interested in contributing to DevCoach, thanks for your interest! You can submit a pull request according to the guidelines below. We're particularly interested in improving our app's performance and styling. Please let one of us know beforehand if you plan to to contribute a new feature to the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

## Coding Style

Our project makes use of the [AirBNB Javascript style guide](https://github.com/airbnb/javascript). Its rules are enforced by ESLint, so you can ensure your code is consistent with our style by checking the console for ESLint warnings.

## Bugs

If you notice a bug on the app, please file an issue letting us know your OS, browser version, what you did, what you expected to see, and what you did see. 

## Submission and Review

Please submit your PR according to the provided template. Your code will need to be approved by at least one other developer prior to being merged, so please at at least two reviewers to your PR.



Adapted from https://github.com/nayafia/contributing-template/blob/master/CONTRIBUTING-template.md.


