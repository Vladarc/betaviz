import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../../UI/SvgIcon/SvgIcon';
import HoverSelect from '../../UI/HoverSelect/HoverSelect';
import { UL } from '../../UI/Ulwrap/Ulcontainer';

export const LanguageSelectList = ({ isActive, itemsList, customClasess }) => {
  const [listItems, classes] = itemsList;
  const [ul, li] = classes.className;
  const cls = [li, customClasess];

  return (
    <HoverSelect isActive={isActive}>
      <UL className={ul}>
        {listItems.map((listItem, index) => (
          <li
            data-language={listItem.language}
            key={index}
            className={cls.join(' ')}
          >
            <div className={`${ul}__icon-wraper`}>
              <SvgIcon
                name={listItem.img.name}
                size={listItem.img.size}
                className={listItem.className}
              />
            </div>
            <div className={`${ul}__text-wraper`}>{listItem.title}</div>
          </li>
        ))}
      </UL>
    </HoverSelect>
  );
};
LanguageSelectList.propTypes = {
  isActive: PropTypes.bool,
  itemsList: PropTypes.array,
  customClasess: PropTypes.any,
};
