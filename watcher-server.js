const http = require('http');
const server = http.createServer();
const trace = require('jstrace');
server.listen(9999, function() {
  console.error('up');
});
const responseWithJSON = (req, res, status, payload) => {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(payload));
};
server.on('request', (req, res) => {
  trace('request:start', {url: req.url});
  let status = 404, body = {error: 'notfound'};
  if (req.method === 'GET' && req.url === '/prognosis') {
    status = 200;
    body = {ok: true};
  }
  responseWithJSON(req, res, status, body);
  trace('request:end', {statusCode: status, body: body});
});
