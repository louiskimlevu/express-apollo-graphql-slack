# node-apollo-graphql-slack

Following the Slack clone tuto from Benawad

https://www.youtube.com/playlist?list=PLN3n1USn4xlkdRlq3VZ1sT6SGW0-yajjL

# Steps

npm init -y
npm i --dev nodemon babel-cli babel-preset-env babel-preset-stage-3
touch index.js
touch .babelrc
npm i -g eslint
npm list --depth 0

# eslint install

npm i -g eslint
npm info "eslint-config-airbnb@latest" peerDependencies
npx install-peerdeps --dev eslint-config-airbnb
$ eslint --init
√ How would you like to use ESLint? · style
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · airbnb
√ What format do you want your config file to be in? · JavaScript
Checking peerDependencies of eslint-config-airbnb-base@latest
The config that you've selected requires the following dependencies:

eslint-config-airbnb-base@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.22.1
√ Would you like to install them now with npm? · No / Yes

# install graphql dependencies

npm install --save apollo-server-express@1 graphql-tools graphql express body-parser
