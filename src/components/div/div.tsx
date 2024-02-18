import * as React from 'react';
import { createElement } from 'react';
import './index.scss';

export interface DivProps {
  children?: string;
}

const Div: React.FC<DivProps> = function Div(props) {
  return <div {...props} />;
};

export default Div;
