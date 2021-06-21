import React, { useState } from "react";
import "./freeCard.css";
import Time from "./Time";
import { Typography, Grid } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import Picture from "./images/picture.jpeg";
import Insta from "./images/insta.png";

const FeedCard = () => {
  return (
    <div className="app">
      <Grid container spacing={4}>
        <Grid item className="social-text">
          <Grid container spacing={4} className="socialdesc">
            <Grid item className="socialicon">
              <InstagramIcon className="icon" />
            </Grid>
            <Grid item className="socialname">
              Instagram
            </Grid>
          </Grid>
          <h4>
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500
          </h4>
        </Grid>
        <Grid item className="socialpicture">
          <img src={Picture} alt="yourpic" />
        </Grid>
      </Grid>
      <Grid container className="time">
        <Grid container spacing={2}>
          <Grid item className="timevalue">
            12:00PM
          </Grid>
          <Grid item className="timevalue">
            31/03/2021
          </Grid>
        </Grid>
        <div className="sociallogo">
          <img src={Insta} alt="yourpic" />
        </div>
      </Grid>
      <div className="margin"></div>
    </div>
  );
};

export default FeedCard;
