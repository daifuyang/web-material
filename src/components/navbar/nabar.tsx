import classNames from 'classnames';
import * as React from 'react';
import { createElement } from 'react';

import Container from 'react-bootstrap/Container';
import BsNavbar from 'react-bootstrap/Navbar';

import { bizCssPrefix } from '../../variables';

export interface NavbarProps {
  /**
   * 类型
   */
  /**
   * 品牌
   */
  brand?: React.ReactNode;
  /**
   * 菜单
   */
  menu?: React.ReactNode;
  menuAlign?: 'left' | 'center' | 'right';
  extra?: React.ReactNode;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = function Navbar({
  brand,
  menu,
  extra,
  menuAlign,
  className,
}) {
  let navClassName = 'ms-auto';
  if (menuAlign === 'center') {
    navClassName = 'm-auto';
  } else if (menuAlign === 'left') {
    navClassName = 'me-auto';
  }

  const __className = classNames({
    [className]: !!className,
    [navClassName]: !!navClassName,
    [`${bizCssPrefix}-navbar`]: true
})


  return (
    <BsNavbar className={__className} expand="lg">
      <Container>
        <a className="navbar-brand">{brand}</a>
        <BsNavbar.Toggle />
        <div className={navClassName}>
            {menu}
          </div>
          {extra}
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
