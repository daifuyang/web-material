import * as React from 'react';
import { createElement } from 'react';
import classNames from 'classnames';
import { bizCssPrefix } from '../../variables';
import './index.scss';

export interface ParagraphProps {
  className?: string;
  style?: React.CSSProperties;
  children?: string;
  __designMode?: string;
}

const Paragraph: React.FC<ParagraphProps> = function Paragraph(props) {
  const { style = {}, className, __designMode, ...otherProps } = props;
  let {children} = props

  let placeholder = ''
  if (__designMode == 'design' && children === null) {
    style.minHeight = '20px';
    placeholder = `${bizCssPrefix}-placeholder`
  }

  const cls = classNames({
    [`${bizCssPrefix}-paragraph`]: true,
    [className]: !!className,
    [placeholder]: !!placeholder

  });

  return (
    <p className={cls} style={style} {...otherProps} placeholder="双击输入内容">
      {children}
    </p>
  );
};

export default Paragraph;
