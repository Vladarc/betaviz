import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    '& th, td': {
      fontSize: '1.4rem',
    },
    '& td': {
      textAlign: 'center',
    },
    '& tr:last-child > *': {
      fontWeight: 700,
    },
  },
  wrraper: {
    margin: '20px 0',
  },
});

export const Summary = ({ orderInfo }) => {
  const classes = useStyles();
  const { header, body } = orderInfo.tableValues;
  return (
    <div className={classes.wrraper}>
      <TableContainer component={Paper}>
        <Table className={classes.root} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell colSpan="2">
                <b>{header}</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {body.map((rows) => (
              <TableRow key={rows.id}>
                <TableCell component="th" scope="row">
                  {rows.title}
                </TableCell>
                <TableCell>{rows.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
Summary.propTypes = {
  orderInfo: PropTypes.object,
};
