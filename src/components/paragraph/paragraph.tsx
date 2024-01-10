import * as React from 'react';
import { createElement } from 'react';
import classNames from 'classnames';
import { bizCssPrefix } from '../../variables';
import './index.scss';

export interface ParagraphProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = function Paragraph(props) {
  const { children,style = {}, ...otherProps } = props;
  if(!children) {
    style.minHeight = '20px';
  }

  const cls = classNames(`${bizCssPrefix}-paragraph`)

  return <p className={cls} style={style} {...otherProps} placeholder='双击键入内容'>{children}</p>;
};

export default Paragraph;
