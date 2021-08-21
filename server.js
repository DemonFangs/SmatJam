'use strict';

const PATH_LIST = {
  getLyrics: require('./tracks/getLyrics.js'),
  getTrack: require('./tracks/getTrack.js'),
};

const http = require('http');

const send = (res, status, text) => {
  const stringText = typeof text === 'string' ? text : JSON.stringify(text);
  res.writeHead(status, {
    'content-type': 'application/json',
    'access-control-allow-origin': '*',
    'cache-control': 'no-cache, no-store, private',
  }); // writeHead
  res.end(stringText);
}; // send

const sanitizePath = path => (path.match(/https:\/\/[^\/]+\/([^\/?])+/) || [])[1];

const tryJSONParse = string =>
  new Promise((ok, fail) => {
    try {
      ok(JSON.parse(string));
    } catch (err) {
      fail(err);
    } // catch
  }); // tryJSONParse

const errorHandler = (res, err) => {
  if (err.code === 'ENOENT') {
    err.status = 404;
    err.message = 'not found';
  } else if (err.message && err.message.startsWith('Unexpected')) {
    err.status = 400;
    err.message = 'message body should be JSON';
  } // else
  send(res, err.status || 500, JSON.stringify(err.message || err));
  console.error(err);
}; // errorHandler

const server = http
  .createServer((req, res) => {
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => {
      const allChunks = chunks.join('');
      const path = sanitizePath(req.url);

      tryJSONParse(allChunks)
        .then(data => {
          const output = PATH_LIST[path](data);
          return send(res, 200, output);
        })
        .catch(err => errorHandler(res, err));
    }); // end
  });

server.keepAliveTimeout = 62 * 1000;