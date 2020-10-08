import React from "react";
import "../../../styles/NavBar.scss";
import { UL } from "../../UI/Ulwrap/Ulcontainer";
import { Ulitem } from "../../UI/List/ListUI";
import NavBarMenu from "./NavBarMenu/NavBarMenu";

const NavBar = (props) => {
  const openNavBarMenuHandler = (index, event) => {
    props.toggleNavBarMenuHandler({
      index,
      isOpened: true,
    });
  };
  const closeNavBarMenuHandler = (index, event) => {
    props.toggleNavBarMenuHandler({
      index,
      isOpened: false,
    });
  };

  return (
    <nav className={"nav"}>
      <div className={"nav__wrapper"}>
        <UL className={"navigation-menu"}>
          {props.links.map((link, index) => {
            const activeLinkClasses = [
              "navigation-menu__link",
              link.isVisible ? "isVisible" : null,
            ];
            return (
              <Ulitem
                key={index}
                NameOfClasses={["navigation-menu__item"]}
                insertLayoutTags={true}
                mouseEnter={openNavBarMenuHandler.bind(null, index)}
                mouseLeave={closeNavBarMenuHandler.bind(null, index)}
              >
                <span className={activeLinkClasses.join(" ")}>
                  {link.title}
                </span>

                <NavBarMenu
                  data={link.subMenu}
                  closeNavBarMenuHandler={closeNavBarMenuHandler.bind(
                    null,
                    index
                  )}
                />
              </Ulitem>
            );
          })}
        </UL>
      </div>
    </nav>
  );
};
export default NavBar;
