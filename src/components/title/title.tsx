import * as React from 'react';
import { createElement } from 'react';
import classNames from 'classnames';
import { bizCssPrefix } from '../../variables';
import './index.scss';

const TITLE_ELE_LIST = [1, 2, 3, 4, 5] as const;

export interface TitleProps {
  level?: (typeof TITLE_ELE_LIST)[number];
  style?: React.CSSProperties;
  className?: string;
  __designMode?: string;
  children?: string;
}

const Title: React.FC<TitleProps> = function Title(props) {

  const { __designMode, children, style = {}, className, level = 1, ...otherProps } = props;

  let placeholder = '';
  if (__designMode == 'design' && children === null) {
    style.minHeight = '32px';
    placeholder = `${bizCssPrefix}-placeholder`;
  }
  const clsObj = {
    [className]: !!className,
    [placeholder]: !!placeholder,
  };

  let Component: keyof JSX.IntrinsicElements;

  if (TITLE_ELE_LIST.includes(level)) {
    Component = `h${level}`;
    clsObj[`${bizCssPrefix}-h${level}`] = true;
  } else {
    Component = 'h1';
    clsObj[`${bizCssPrefix}-h1`] = true;
  }

  const cls = classNames(clsObj);

  return (
    <Component className={cls} style={style} {...otherProps} placeholder="双击输入标题">
      {children}
    </Component>
  );
};

export default Title;
