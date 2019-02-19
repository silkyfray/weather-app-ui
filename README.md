This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Implementation Notes

### App Structure

The files are structured by nature

```
- src
  - actions - file per domain concern
  - api - files for interfacing with the api
    - types - api types
  - features - UI components and containers
  - models - state interfaces
  - reducers - file per domain concern
  - sagas - file per domain concern
```

Test files live beside the functionality their are testing.

### Unit Tests

Two tests were written:

- The presentational table renders the appropriate number of rows and columns
- The fetch saga correctly maps the response type to the state type

### Assumptions Made

- if a city is already in the table then remove the current one and put it again at the top of the table
- the average temp of the min and max is taken

### Possible Improvements

- Group files by function. Common Closure Principle
- Action creators
- linting
- Loader spinner
- Move error UI state out of Forecast state
- Use immutable js to make sure the state is not directly modified
- More tests

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
