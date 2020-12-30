// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fabric } from 'fabric';

// eslint-disable-next-line no-unused-vars
const Canvas = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [canvas, setCanvas] = useState(null);
  useEffect(() => {
    const canvas = new fabric.Canvas('my-fabric-canvas');
    setCanvas(canvas);
    fabric.Image.fromURL(props.ImgUrl, (oImg) => {
      oImg.rotate(90);
      oImg.scaleToWidth(200);
      oImg.scaleToHeight(400);
      canvas.add(oImg);
      canvas.centerObject(oImg);
      canvas.renderAll();
    });
    return () => {
      console.log('unmount');
      canvas.dispose();
    };
  }, []);
  return (
    <>
      <canvas id="my-fabric-canvas" width={260} height={460} />
    </>
  );
};
Canvas.displayName = 'Canvas';
Canvas.propTypes = {
  defaultImageCoord: PropTypes.object,
  setImageCoordinates: PropTypes.func,
  orientation: PropTypes.object,
  ImgUrl: PropTypes.string,
  setImageURL: PropTypes.func,
  id: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.any,
};

export default Canvas;
