import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
import NavigationList from '../NavigationList/NavigationList';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const HeaderDrawer = ({ drawerState, toggleHandler }) => {
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles();
  return (
    <div>
      <Drawer anchor={'left'} open={drawerState} onClose={toggleHandler(false)}>
       <NavigationList />
      </Drawer>
    </div>
  );
};
HeaderDrawer.propTypes = {
  drawerState: PropTypes.bool,
  toggleHandler: PropTypes.func,
};
export default HeaderDrawer;
