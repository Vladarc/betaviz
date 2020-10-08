import React from "react";
import "../../styles/Header.scss";
import Logo from "../../image/logo.jpg";
import { Image } from "../UI/Image/Image";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { toJS } from "../hoc/toJs/toJs";
import { Ulitem } from "../UI/List/ListUI";
import { UL } from "../UI/Ulwrap/Ulcontainer";
import { SerchInput } from "../Search/SearchInput";
import { hoverTogglHandler } from "../../actions/headerActions";
import NavBar from "./NavBar/NavBarContainer";
import { Link } from "react-router-dom";
const Header = ({
  hoverTogglHandler,
  headerLinks,
  languagesList,
  langSelectClasses,
}) => {
  const OpenListHoverHandler = () => hoverTogglHandler(true);
  const CloseListHoverHandler = () => hoverTogglHandler(false);
 

  return (
    <header className={"header"}>
      <Container maxWidth="lg">
        <div className={"header__wrapper"}>
          <div className={"header__logo_wrap"}>
            <Link to="/">
              <Image src={Logo} alt={"Logo"} className={"header__logo"} />
            </Link>
          </div>
          <div className={"nav-wrapper"}>
            <UL className={"link-list"}>
              {headerLinks.map((link, index) => {
                const classesAndAttributes = [
                  "link-list__item",
                  link.className ? link.className : null,
                  link.type ? link.type : null,
                  link.icon
                    ? `${"link-list__item"}--${link.img.className}`
                    : null,
                ];

                return (
                  <Ulitem
                    languagesList={
                      link.type === "lang"
                        ? [languagesList, langSelectClasses]
                        : null
                    }
                    mouseEnter={
                      link.type === "lang" ? OpenListHoverHandler : false
                    }
                    mouseLeave={
                      link.type === "lang" ? CloseListHoverHandler : false
                    }
                    isActive={langSelectClasses.isOpen}
                    key={index}
                    isAdditionalContent={link.icon}
                    svg={link.img}
                    text={link.title}
                    NameOfClasses={classesAndAttributes}
                  />
                );
              })}
            </UL>
            <SerchInput className="header__serch-field" />
          </div>
        </div>
        <NavBar />
      </Container>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    headerLinks: state.getIn(["HeaderReducer", "headerLinks"]),
    languagesList: state.getIn(["HeaderReducer", "language"]),
    langSelectClasses: state.getIn(["HeaderReducer", "languageSelectClasses"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    hoverTogglHandler: (payload) => dispatch(hoverTogglHandler(payload)),
  };
};

const ContainerHeader = toJS(Header);
export default connect(mapStateToProps, mapDispatchToProps)(ContainerHeader);
