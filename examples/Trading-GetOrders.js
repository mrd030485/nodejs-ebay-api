/**
 * example ebay API request to Trading:GetOrders
 */

var ebay = require('../index.js');

ebay.xmlRequest({
  serviceName : 'Trading',
  opType : 'GetOrders',

  // app/environment
  devName: '...........',
  cert: '...........',
  appName: '...........',
  sandbox: true,

  // per user
  authToken: '...........',

  params: {
    'OrderStatus': 'Active',
    'NumberOfDays': 1
  }
}, function(error, results) {
  // ...
});