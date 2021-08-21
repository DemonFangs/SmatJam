const musicMatch = require('../musicmatch.js');
const getLyrics = require('./getLyrics.js');

const ITEMS_PER_PAGE = 5;

const params = {
  page_size: 1,
  q_lyrics: 'Any words in the lyrics',
}

const extractFiveWords = (text = '') => 
  ['Any', 'words', 'in', 'the', 'lyrics']
    .map(word => {
      const index = Math.random() * text.length;
      if (!index) return word;

      const searchReg = new RegExp(`.{${index}}[^ ]+ ([^ ]+)`);
      return text.match(searchReg)[1];
    })
    .join(' ');

/**
 * Returns a list of 5 tracks each with lyrics containing 5 randowm words from
 * the lyrics of the last song
 * @param {{ page_number: number, words: string }} data The next page number and the last known words from the last
 * track lyrics
 * @returns A list of 5 tracks
 */
module.exports = async (data) => {
  const { page_number, words } = data || {};
  params.q_lyrics = words || params.q_lyrics;
  params.page = page_number || 1;
  const songs = [];
  for (let index = 0; index < ITEMS_PER_PAGE; index += 1) {
    const song = await musicMatch('track.search', {});
    if (!song?.tracks?.length) break;
    
    const [{ track }] = song.tracks;
    const lyrics = getLyrics(track);
    if (!lyrics) {
      // Song does not contain any lyric. null is an indicator for no more tracks left
      // exit and return the cached number of songs to App
      songs.push(null);
      break;
    }
    params.q_lyrics = extractFiveWords(lyrics);
    params.page += 1;
    songs.push(song);
  }

  return songs;
};