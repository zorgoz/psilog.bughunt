// Import all tags
var req = require.context("./app/tags/", false, /^.*\.tag$/i);
req.keys().forEach(req);


riot.mount('app');