require('babel-register')();

// const jsdom = require('jsdom').jsdom;
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const exposedProperties = ['window', 'navigator', 'document'];

// global.document = jsdom('');
const { document } = (new JSDOM('')).window;
global.document = document;

global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};

// const documentRef = document;
