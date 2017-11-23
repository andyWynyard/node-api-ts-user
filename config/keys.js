// logic to decide on prod or dev

if (process.env.NODE_ENV === 'production') {
  // production
  module.exports = require('./prod');
} else if (process.env.NODE_ENV === 'test') {
  // dev
  module.exports = require('./test');
} else {
  module.exports = require('./dev');
}
