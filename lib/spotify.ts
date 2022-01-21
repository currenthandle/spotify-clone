// helper for Spotify

import SpotifyWebApi from "spotify-web-api-node/src/spotify-web-api";

const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collabrative",
  "user-read-email",
  "streams",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  // "user-library-modify"
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-rectntly-played",
  "user-follow-read",
].join(",");

const params = {
  scopes,
};

const queryParamsString = new URLSearchParams(params);

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamsString.toString()}`;
/*
const LOGIN_URL =
  "https://accounts.spotify.com/authorize?" + queryParamsString.toString();
  */
//console.log("**********8" + LOGIN_URL);

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLICCLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECERT,
});

export default spotifyApi;

export { LOGIN_URL };