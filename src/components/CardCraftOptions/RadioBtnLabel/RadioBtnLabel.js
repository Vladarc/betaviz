import React from 'react';
import PropTypes from 'prop-types';
import { Image } from '../../UI/Image/Image';

export const RadioBtnLabel = (props) => {
  const cls = ['option-card', props.isActive ? 'active' : ''];
  return (
    <div className={cls.join(' ')}>
      <div className="option-card__wrapper">
        <Image
          src={props.data.img}
          alt={props.data.title}
          className="option-card__image"
        />
      </div>
      <div className="option-card__title">
        {props.data.title}
        <p>{props.data.description}</p>
      </div>
    </div>
  );
};
RadioBtnLabel.propTypes = {
  isActive: PropTypes.bool,
  data: PropTypes.object,
};
