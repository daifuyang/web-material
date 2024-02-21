import * as React from 'react';
import { createElement } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BsNavbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
}

const Navbar: React.FC<NavbarProps> = function Navbar({
  brand,
  menu,
  extra,
  menuAlign,
  children,
  ...otherProps
}) {
  let navClassName = 'ms-auto';
  if (menuAlign === 'center') {
    navClassName = 'm-auto';
  } else if (menuAlign === 'left') {
    navClassName = 'me-auto';
  }

  return (
    <BsNavbar expand="lg" className="bg-body-tertiary">
      <Container>
        <a className="navbar-brand">{brand}</a>
        <BsNavbar.Toggle />
        <BsNavbar.Collapse >
          <div className={navClassName}>
            {menu}
          </div>
          {extra}
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
