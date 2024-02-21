import * as React from 'react';
import { createElement } from 'react';
import './index.scss';

export interface MainProps {
  children?: string;
}

const Main: React.FC<MainProps> = function Main(props) {
  return <main {...props} />;
};

export default Main;
