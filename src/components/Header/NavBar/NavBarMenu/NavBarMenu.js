import React from 'react';
import PropTypes from 'prop-types';
import '../../../../styles/NavBarMenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { UL } from '../../../UI/Ulwrap/Ulcontainer';

const NavBarMenu = (props) => {
  const mainClassses = ['nav-menu', props.data.isActive ? 'isOpened' : ''];
  const activeClassesLi = ['nav-main__item'];
  const activeClassesIcon = ['nav-main__icon'];

  return (
    <div className={mainClassses.join(' ')}>
      <div className="grid-menu">
        <div className="grid-menu__item">
          <UL className="nav-main">
            {props.data.links.map((content, index) => (
              <li className={activeClassesLi.join(' ')} key={index}>
                <Link onClick={props.closeNavBarMenuHandler} to={content.path}>
                  {content.name}
                </Link>
                {content.subList ? (
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className={activeClassesIcon.join(' ')}
                  />
                ) : null}
              </li>
            ))}
          </UL>
        </div>
        <div className="grid-menu__item">2</div>
      </div>
    </div>
  );
};
NavBarMenu.propTypes = {
  data: PropTypes.object,
  closeNavBarMenuHandler: PropTypes.func,
};
export default NavBarMenu;
