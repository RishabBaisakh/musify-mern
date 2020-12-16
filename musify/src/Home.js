import React from "react";
import "./Home.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";
import { useDataLayerValue } from "./DataLayer";

function Home() {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className="home">
      <div className="home__info">
        <img
          src="https://www.adweek.com/files/2016_Aug/spotify-quote.gif"
          alt=""
        ></img>

        <div className="home__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="home__songs">
        <div className="home__icons">
          <PlayCircleFilledIcon className="home__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item, index) => (
          <SongRow key={index} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Home;
