const musicMatch = require('../musicmatch.js');

module.exports = async (data) => {
  const { track_id } = data || {};
  
  const body = await musicMatch('track.lyrics.get', { track_id });
  if (!body?.lyrics?.lyrics_body) return '';
  return body.lyrics.lyrics_body;
};