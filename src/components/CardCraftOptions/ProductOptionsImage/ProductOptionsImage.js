import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../../styles/ProductOptionsImage.scss';

const ProductOptionsImage = ({ productImg }) => {
  const [flip, setFlip] = useState('prewiev-img--centered');
  const cls = [productImg.classes, flip];

  const flipImageHandler = (event) => {
    const getPosX = event.nativeEvent.layerX;
    if (getPosX > 370) {
      setFlip('prewiev-img--right');
    } else if (getPosX > 171 && getPosX < 371) {
      setFlip('prewiev-img--centered');
    } else if (getPosX < 170) {
      setFlip('prewiev-img--left');
    }
  };

  const setDefaultPosHandler = () => {
    setFlip('prewiev-img--centered');
  };
  return (
    <picture
      className="product-image-wrapper"
      onMouseLeave={productImg.isVisibale ? setDefaultPosHandler : undefined}
      onMouseMove={productImg.isVisibale ? flipImageHandler : undefined}
    >
      <img src={productImg.previewImage} alt="" className={cls.join(' ')} />
    </picture>
  );
};
ProductOptionsImage.propTypes = {
  productImg: PropTypes.object,
};
export default ProductOptionsImage;
