import useSpotify from "../hooks/useSpotify";

function Song({ order, track }) {
  const spotifyApi = useSpotify();
  return (
    <div>
      <div>
        <p>{order + 1}</p>
        <img
          className="h-10 w-10"
          src={track.track.album.images[0].url}
          alt=""
        />
      </div>
    </div>
  );
}

export default Song;
