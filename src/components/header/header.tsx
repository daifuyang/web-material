import * as React from 'react';
import { createElement } from 'react';
import './index.scss';

export interface HeaderProps {
  children?: string;
}

const Header: React.FC<HeaderProps> = function Header(props) {
  return <header {...props} />;
};

export default Header;
