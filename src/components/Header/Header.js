import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Header.scss';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import Logo from '../../image/logo.jpg';
import { Image } from '../UI/Image/Image';
import { Ulitem } from '../UI/List/ListUI';
import { UL } from '../UI/Ulwrap/Ulcontainer';
import { SerchInput } from '../Search/SearchInput';
import NavBar from './NavBar/NavBarContainer';

const Header = ({
  hoverTogglHandler,
  headerLinks,
  languagesList,
  langSelectClasses,
}) => {
  const OpenListHoverHandler = () => hoverTogglHandler(true);
  const CloseListHoverHandler = () => hoverTogglHandler(false);
  return (
    <header className="header">
      <Container maxWidth="lg">
        <div className="header__wrapper">
          <div className="header__logo_wrap">
            <Link to="/">
              <Image src={Logo} alt="Logo" className="header__logo" />
            </Link>
          </div>
          <div className="nav-wrapper">
            <UL className="link-list">
              {headerLinks.map((link, index) => {
                const classesAndAttributes = [
                  'link-list__item',
                  link.className ? link.className : null,
                  link.type ? link.type : null,
                  link.icon
                    ? `${'link-list__item'}--${link.img.className}`
                    : null,
                ];

                return (
                  <Ulitem
                    languagesList={
                      link.type === 'lang'
                        ? [languagesList, langSelectClasses]
                        : null
                    }
                    mouseEnter={
                      link.type === 'lang' ? OpenListHoverHandler : false
                    }
                    mouseLeave={
                      link.type === 'lang' ? CloseListHoverHandler : false
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
Header.propTypes = {
  hoverTogglHandler: PropTypes.func,
  headerLinks: PropTypes.array,
  languagesList: PropTypes.array,
  langSelectClasses: PropTypes.object,
};
export default Header;
