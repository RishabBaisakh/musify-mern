import React, {useState} from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

function Footer() {
  const audios = ["Audio_One.mp3", "Audio_Two.mp3", "Audio_Three.mp3"];

  const audio = new Audio();
  audio.src = audios[0];

  const play = () => {
    audio.play();
  };

  const pause = () => {
     audio.pause();
  }
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStDqjGOyr5OCyiCrQr4FfTGoGqqMOzJPMczQ&usqp=CAU"
          alt=""
          className="footer__albumLogo"
        />
        <div className="footer__songInfo">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon onClick={play} fontSize="large" className="footer__icon" />
        <PauseCircleOutlineIcon onClick={pause} fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item >
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>

          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
