import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";

import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  root: {
    width: "100%",
    "& td, th": {
      fontSize: "1.4rem",
      textAlign: "center",
    },
    "& td": {
      cursor: "pointer",
    },
  },
  container: {
    maxHeight: 440,
  },
});

const QuantityTable = ({
  tableValues,
  selectedElementsQty: selected,
  selectRowHandle,
  setDefaultCombination,
  isSetDefaultOptions,
}) => {
  const classes = useStyles();
  let { header, tableBody: body } = tableValues;
  const selectRowHandler = (id) => {
    
    if (!isSetDefaultOptions) {
      setDefaultCombination({
        size:"standard",
        measure:"2.0-3.5",
        corner:"square",
        material:"matte",
        qty: id 
      });
    } else {
      selectRowHandle(id);
    }
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {header.map((head) => {
                return <TableCell key={head}>{head}</TableCell>;
              })}
            </TableRow>
          </TableHead>

          <TableBody>
            {body.map((body) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={body.id}
                  onClick={selectRowHandler.bind(null, body.id)}
                  selected={selected.value === body.id ? true : false}
                >
                  <TableCell>{body.qty}</TableCell>
                  <TableCell>{body.price}</TableCell>
                  <TableCell>{body.packPrice}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default QuantityTable;
