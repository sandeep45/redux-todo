#### Init the project

````
mkdir counter
cd counter
npm init
touch README.md
````
#### Load Dependencies

````
npm install --save react react-dom redux react-redux keymirror axios css-loader style-loader file-loader url-loader
npm install --save-dev webpack babel webpack-dev-server babel-loader babel-preset-react babel-preset-es2015 babel-preset-stage-1 redux-devtools
````

#### Setup Webpack

````
touch webpack.config.js
echo 'module.exports = {
  devtool: "eval-source-map",
  entry: "./src/js/index.js",
  output: {
    path: "./dist",
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    inline: true,
    contentBase: "./dist",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          presets: ["es2015", "react", "stage-1"]
        }
      }
    ]
  }
};' > webpack.config.js
````

#### Setup Output and Input Directory/File

mkdir dist src
touch dist/index.html

#### Add template for index.html

echo '<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title></title>
</head>
<body>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
<div id="root"></div>
<script src="bundle.js"> </script>
</body>
</html>' > dist/index.html

#### make basic directory structure

cd src
mkdir js
cd js
touch index.js

mkdir actions
touch actions/index.js

mkdir reducers
touch reducers/index.js

mkdir components
touch components/App.js

mkdir containers

#### add template for  index.js

````
echo "import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import myReducer from './reducers'
import App from './components/App'

let store = createStore(myReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
" > index.js
````

#### add templat for app.js

````
echo "import React from 'react';

const App = (props) => {
  return(
    <h1>Hello World</h1>
  )
}

export default App" > components/App.js
````

#### add template for the main reducer

````
echo "const myReducer = (state, action) => state

export default myReducer" > reducers/index.js
````

#### Setup Git

````
git init

echo ".DS_STORE
node_modules
*~
*.pyc
static
.grunt
_SpecRunner.html
__benchmarks__
build/
coverage/
.module-cache
*.gem
docs/.bundle
docs/code
docs/_site
docs/.sass-cache
docs/js/*
docs/downloads
docs/vendor/bundle
examples/shared/*.js
test/the-files-to-test.generated.js
*.log*
chrome-user-data
*.sublime-project
*.sublime-workspace
.idea
*.iml
.vscode" > .gitignore
````

#### Update package.json

````
"private": true,
"scripts": {
    "start": "webpack-dev-server"
}
````