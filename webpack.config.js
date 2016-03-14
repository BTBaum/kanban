const path = require('path');

const TARGETS = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const common = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  }
};

if(TARGET === 'start' || !TARGET) {
  modue.exports = merge(common, {});
}

if(TARGET === 'build') {
  modue.exports = merge(common, {});
}
