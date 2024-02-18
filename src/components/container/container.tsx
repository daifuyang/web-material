import * as React from 'react';
import { ReactNode, createElement } from 'react';
import RbContainer from 'react-bootstrap/Container';

export interface ContainerProps {
  style?: object;
  children?: ReactNode;
}

const Container: React.FC<ContainerProps> = function Grid(props) {
  const { children, ...otherProps } = props;
  return <RbContainer {...otherProps}>{children}</RbContainer>;
};

export default Container;
