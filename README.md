# SmatJam

A "smart" API that allows users to listen to songs they may like and save their preferences.

## Usage

The API call responds to request URLs in the format: `https://<api_url>/<path>?<param_list>` where at the moment `path` is either `getTracks` or `getLyrics`.

`getTracks` returns a list of 5 tracks instead of two to reduece the number of API calls from the app, any subsequent request (for next batch of tracks) will return the next 5 tracks. Due to lack of time the logic to get unique tracks (no repeated tracks) have not been thoroughly implemented.
