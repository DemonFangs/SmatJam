const API_URL = 'https://api.musixmatch.com/ws/1.1/';
const API_KEY = '12832752fc79e94b205e24b1a5bf7a4d';
const options = { method: 'GET' };
const { request } = require('https');

const constructUrl = (path = '', data = {}) => {
  const params = Object.keys(data).map(key => `${key}=${JSON.stringify(value)}`);
  return `${API_URL}${path}?format=jsonp&callback=callback&apikey=${API_KEY}&${params.join('&')}`;
};

module.exports = async (path, data) => {
  const endpoint = constructUrl(path, data);
  return new Promise((ok, fail) => {
    request(
      endpoint,
      options,
      res => {
        const chunks = [];
        res.setEncoding('utf8');
        res.on('data', chunk => chunks.push(chunk));
        res.on('end', () => {
          try {
            const allChunks = chunks.join('');
            let responseObj;
            let content;
            try {
              responseObj = JSON.parse(str);
              content = responseObj?.message?.body;
            } catch (err) {
              content = allChunks;
            } // catch
            if (res.statusCode >= 200 && res.statusCode < 300) ok(content);
            else fail(error);
          } catch (err) {
            fail(err);
          } // catch
        }); // on end
        res.on('error', fail);
      }
    ) // response handler
      .on('error', fail)
      .end(JSON.stringify(data));
  }); // Promise
}