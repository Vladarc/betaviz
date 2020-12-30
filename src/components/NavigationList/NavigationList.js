import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const NavigationList = () => {
  const classes = useStyles();
  const navLinks = [
    {name: 'Original Card', path: '/originalcard'},
  ];
  return (
    <List component="nav" className={classes.root} aria-label="contacts">
      <NavLink to={'/'} >
      <ListItem button >
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      </NavLink>
      {
        navLinks.map(link => {
          return (
          <NavLink to={link.path} >
          <ListItem button>
            <ListItemText inset primary={link.name} />
          </ListItem>
          </NavLink> );
        })
      }
    </List>
  );
};

export default NavigationList;
