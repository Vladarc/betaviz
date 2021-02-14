import React, { useRef } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import '../../../styles/UploadBuildCardHeader.scss';

const useBuilderNameStyles = makeStyles(() => ({
  root: {
    borderRadius: 0,
  },
}));
const BuilderNameField = () => {
  const classes = useBuilderNameStyles();
  const fieldValue = useRef('Untitled');
  const saveCustomNameHandler = () => {};
  return (
    <>
      <div className="product-name">
        <div className="product-name__wrapper">
          <input
            type="text"
            className="product-name__field"
            value={fieldValue.current}
            onChange={saveCustomNameHandler}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.root}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </div>
    </>
  );
};
export default BuilderNameField;
