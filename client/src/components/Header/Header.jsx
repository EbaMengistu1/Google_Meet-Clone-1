import React, { useState } from "react";
import {
  HelpOutline,
  FeedbackOutlined,
  Settings,
  Apps,
  PersonAddOutlined,
  CameraAltOutlined,
} from "@material-ui/icons";
import { Avatar, Badge, Button, makeStyles, Popover } from "@material-ui/core";
import { useAppContext } from "../../context/appContext";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const {currentUser} = useAppContext();

  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <div className="header__logoContainer">
        <img
          src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png"
          alt="Google"
          className="header__logo"
        />
        <p>Meet</p>
      </div>

      <div className="header__icons">
        <HelpOutline />
        <FeedbackOutlined />
        <Settings />

        <div className="header__iconDivider"></div>

        <Apps />
        <Avatar className="header_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4rsSzLimlQyniEtUV4-1raljzFhS45QBeAw&usqp=CAU" onClick={handleClick} />

        <Popover
          open={open}
          id={id}
          onClose={handleClose}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
          }}
        >
          <div className="home__popoverContainer">
            <div className="home__popover__top">
              <Badge
                overlap="circle"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <div className="home__badge">
                    <CameraAltOutlined className="home__camera" />
                  </div>
                }
              >
                <Avatar className={classes.large} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4rsSzLimlQyniEtUV4-1raljzFhS45QBeAw&usqp=CAU" />
              </Badge>

              <div className="home__text">
                <div className="home__displayName">{currentUser?.displayName}</div>

                <div className="home__mail">{currentUser?.email}</div>
              </div>

              <div className="home__btn">Manage your Google Account</div>
            </div>

            <div className="home__popover__btm">
              <div className="home__addBtn">
                <PersonAddOutlined className="home__addIcon" />
                <p>Add another account</p>
              </div>

              <Button variant="outlined" className="home__signOut">
                Sign Out
              </Button>

              <div className="home__popover__footer">
                <p>Privacy policy</p>
                <span>•</span>
                <p>Terms of service</p>
              </div>
            </div>
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
