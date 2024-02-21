import * as React from 'react';
import { createElement } from 'react';
import './index.scss';

export interface FooterProps {
  children?: string;
}

const Footer: React.FC<FooterProps> = function Footer(props) {
  return <footer {...props} />;
};

export default Footer;
