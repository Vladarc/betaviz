import React, { useState } from 'react';
import '../../styles/Header.scss';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container } from '@material-ui/core';
import HeaderDrawer from '../Drawer/Drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  label: {
    width: '35px',
    height: '35px',
    fill: '#fff',
  },
  title: {
    flexGrow: 1,
  },
  loginBtn: {
    fontSize: '1.6rem',
  },
  homeLink: {
    fontSize: '1.6rem',
    color: '#fff',
    textDecoration: 'none',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Container maxWidth="lg">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon className={classes.label} />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                MOO
              </Typography>
              <Button color="inherit" className={classes.loginBtn}>
                Login
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
      <HeaderDrawer drawerState={openDrawer} toggleHandler={toggleDrawer} />
    </>
  );
}
