import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon/SvgIcon';
import { LanguageSelectList } from '../../Header/SelectLanguage/SelectLanguage';

export const Ulitem = ({
  svg,
  NameOfClasses,
  isAdditionalContent,
  text,
  languagesList,
  isActive,
  insertLayoutTags,
  children,
  mouseEnter,
  mouseLeave,
}) => {
  const [defaultCls, customCls, attr, itemWithIcons] = NameOfClasses;

  const cls = [defaultCls, customCls, itemWithIcons];

  return (
    <li
      datatype={attr}
      className={cls.join(' ')}
      onMouseMove={mouseEnter ? mouseEnter : undefined}
      onMouseLeave={mouseLeave ? mouseLeave : undefined}
    >
      {isAdditionalContent ? (
        <SvgIcon name={svg.name} size={svg.size} className={svg.className} />
      ) : null}
      {insertLayoutTags ? children : text}
      {languagesList != null ? (
        <LanguageSelectList
          isActive={isActive}
          itemsList={languagesList}
          customClasess={itemWithIcons}
        />
      ) : null}
    </li>
  );
};
Ulitem.propTypes = {
  svg: PropTypes.object,
  NameOfClasses: PropTypes.array,
  isAdditionalContent: PropTypes.bool,
  text: PropTypes.string,
  languagesList: PropTypes.array,
  isActive: PropTypes.bool,
  insertLayoutTags: PropTypes.bool,
  children: PropTypes.any,
  mouseEnter: PropTypes.any,
  mouseLeave: PropTypes.any,
};
