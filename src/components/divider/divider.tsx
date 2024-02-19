import * as React from 'react';
import { createElement } from 'react';

import { bizCssPrefix } from '../../variables';

import classNames from 'classnames'
import './index.scss';

export interface DividerProps {
  className?: string;
  children?: string;
}

const Divider: React.FC<DividerProps> = function Divider(props) {

  const { className, ...others } = props

  const _className = classNames({
    [`${bizCssPrefix}-divider`]: true,
    [`${bizCssPrefix}-divider-horizontal`]: true,
    [className]: !!className
  })

  return <div className={`${bizCssPrefix}-divider-wrap`}>
    <div className={_className} {...others} />
  </div>
};

export default Divider;
