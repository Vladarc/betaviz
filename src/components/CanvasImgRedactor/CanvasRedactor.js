import React, { useEffect, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { fabric } from 'fabric';

const Canvas = forwardRef((props, ref) => {
  const fabricCanvas = new fabric.Canvas();
  useEffect(() => {
    fabricCanvas.initialize(props.id, props.orientation);

    fabric.Image.fromURL(props.ImgUrl, function (oImg) {
      oImg.scaleToWidth(250);
      oImg.scaleToHeight(250);
      fabricCanvas.centerObject(oImg);
      fabricCanvas.add(oImg);
    });

    fabricCanvas.on('saveData', () => {
      props.setImageURL(fabricCanvas.toDataURL('png'));
    });
  });

  useImperativeHandle(ref, () => ({
    saveImageURL() {
      fabricCanvas.fire('saveData');
    },
  }));
  return (
    <>
      <canvas id={props.id} />
    </>
  );
});
Canvas.displayName = 'Canvas';
Canvas.propTypes = {
  orientation: PropTypes.object,
  ImgUrl: PropTypes.string,
  setImageURL: PropTypes.func,
  id: PropTypes.string,
};

export default Canvas;
