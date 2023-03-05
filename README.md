# react-quiz-app
This is an app which uses a question collection, and plays out a quiz from those.

##Components created
  - Quiz
  - Setup_form
  - Question
  - QuizNav
  - Card

## Features used:
  - useState
  - useEffect
  - useRef

## Challenging Parts
  - Question Navigation feature while maintaining the state of selected answers
 
## Solution
  - Store the state of all Questions in a parent container, and pass each question's state to it through props.
  
  
## Screenshots
### Setup Round
![image](https://user-images.githubusercontent.com/61639823/222985405-05643812-e7eb-4236-9001-fade476b7a11.png)

### Questions Round
![image](https://user-images.githubusercontent.com/61639823/222985531-4c1c2f92-202a-40ee-bf0a-6bb43efa5591.png)

### Score
![image](https://user-images.githubusercontent.com/61639823/222985560-0efade6b-e43a-42d2-adb3-4946353cbe26.png)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

With hot reload.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
