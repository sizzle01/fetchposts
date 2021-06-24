import React from "react";
import "./Footer.css";
import { Grid, Typography } from "@material-ui/core";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Logo from "../../images/logo.jpg";

const Footer = () => {
  return (
    <div>
      <Grid item xs={12}>
        <Grid container className="footer-cont">
          <Grid item className="footer-item">
            <Typography variant="h5" className="footer-desc">
              <img src={Logo} alt="logo" />
            </Typography>
            <Grid item className="footer-list">
              <MailOutlineIcon />
              <Typography variant="h6">
                No. 424, Oka Akoko Crescent, Off Lagos Street, Garki, Abuja
              </Typography>
            </Grid>
            <Typography variant="h6" className="footer-list">
              Phone:+2348099998140
            </Typography>
            <Typography variant="h6" className="footer-list">
              info@beautysecretskincarespa.com
            </Typography>
          </Grid>

          <Grid item className="footer-item">
            <Typography variant="h5" className="footer-desc">
              PAGES
            </Typography>
            <div className="footer-line"></div>
            <Typography variant="h6" className="footer-list">
              home
            </Typography>
            <Typography variant="h6" className="footer-list">
              home
            </Typography>
            <Typography variant="h6" className="footer-list">
              home
            </Typography>
            <Typography variant="h6" className="footer-list">
              <a
                href="https://store.beautysecretskincarespa.com"
                target="_blank"
              >
                Shop
              </a>
            </Typography>
            <Typography variant="h6" className="footer-list">
              <a
                href="Appointmenthttps://my.setmore.com/bookingpage/5b550b07-a067-4fd2-a79c-9fd7bde90af4"
                target="_blank"
              >
                Appointment
              </a>
            </Typography>
          </Grid>
          <Grid item className="footer-item">
            <Typography variant="h5" className="footer-desc">
              TAGS
            </Typography>
            <div className="footer-line"></div>
            <Typography variant="h6" className="footer-list">
              Man
            </Typography>
            <Typography variant="h6" className="footer-list">
              Pedicure
            </Typography>
            <Typography variant="h6" className="footer-list">
              Facial
            </Typography>
            <Typography variant="h6" className="footer-list">
              spa
            </Typography>
          </Grid>
          <Grid item className="footer-item">
            <Typography variant="h5" className="footer-desc">
              PAYMENT METHODS
            </Typography>

            <div className="footer-line"></div>
          </Grid>

          <div className="footer-break"></div>

          <Grid container className="footer-cont2">
            <Grid item className="footer-item">
              <Typography variant="h6" className="footer-list">
                Copyright 2021 Beauty secret. All Rights Reserved
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
