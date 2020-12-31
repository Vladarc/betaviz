import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fabric } from 'fabric';

const Canvas = (props) => {
  const JsonCanvasDate = props.defaultImageCoord;
  const [canvas, setCanvas] = useState(null);
  useEffect(() => {
    const canvas = new fabric.Canvas('my-fabric-canvas');
    setCanvas(canvas);
    if (Object.keys(JsonCanvasDate).length) {
      canvas.loadFromJSON(JsonCanvasDate, function () {
        canvas.renderAll();
      });
    } else {
      fabric.Image.fromURL(props.ImgUrl, (oImg) => {
        canvas.add(oImg);
      });
    }
    canvas.on('mouse:up', () => {
      let date = canvas.toJSON();
      props.setImageCoordinates(date);
    });
    return () => {
      canvas.dispose();
      canvas.__eventListeners['mouse:up'] = [];
    };
  }, []);
  return (
    <>
      <canvas id="my-fabric-canvas" width={460} height={260} />
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
