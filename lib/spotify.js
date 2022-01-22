// helper for Spotify

import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-email",
  "streaming",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  // "user-library-modify"
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-follow-read",
].join(",");

const params = {
  scopes: scopes,
};

const queryParamsString = new URLSearchParams(params);

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamsString.toString()}`;
console.log("LOGIN_URL", LOGIN_URL);
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
console.log("");
console.log("LOG", LOGIN_URL);
console.log("");
export { LOGIN_URL };
