const newrelic = require('newrelic');
const { startServer } = require('@base-cms/marko-web');
const { version } = require('./package.json');
const routes = require('./server/routes');
const siteConfig = require('./config/site');
const coreConfig = require('./config/core');
const document = require('./server/components/document');
const components = require('./server/components');
const fragments = require('./server/fragments');
const redirect = require('./redirect-handler');

const { log } = console;

module.exports = startServer({
  rootDir: __dirname,
  coreConfig,
  siteConfig,
  routes,
  document,
  components,
  fragments,
  version,
  onStart: app => app.set('trust proxy', 'loopback, linklocal, uniquelocal'),
  onAsyncBlockError: e => newrelic.noticeError(e),
  redirectHandler: ({ from }) => { return redirect.check(from) },
}).then(() => log('Website started!')).catch(e => setImmediate(() => { throw e; }));
