const musicMatch = require('../musicmatch.js');

module.exports = async (data) => {
  const { track_id } = data || {};
  
  const lyrics = await musicMatch('track.lyrics.get', { track_id });
  if (!lyrics?.lyrics_body) return '';
  return lyrics.lyrics_body;
};