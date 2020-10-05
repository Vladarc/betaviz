import React from "react";
import SvgIcon from "../SvgIcon/SvgIcon";
import { LanguageSelectList } from "../../Header/SelectLanguage/SelectLanguage";

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
  mouseLeave

}) => {
  const [defaultCls, customCls, attr, itemWithIcons] = NameOfClasses;
  
  const cls = [defaultCls, customCls, itemWithIcons];

  return (
    <li
      data-type={attr}
      className={cls.join(" ")}
      onMouseMove = { mouseEnter ? mouseEnter : undefined}
      onMouseLeave  = { mouseLeave ? mouseLeave : undefined}
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
