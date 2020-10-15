import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: .05,
  },
  subtitle: {
    flexGrow: 1,
  }
}));

const TopBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar id="topbar" position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Douglas Agneta
          </Typography>
          <Typography variant="h8" className={classes.subtitle}>Built Using React.js</Typography>
          <Button><a href="#about">About</a></Button>
          <Button><a href="#projects">Projects</a></Button>
          <Button><a href="#links">Links</a></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar