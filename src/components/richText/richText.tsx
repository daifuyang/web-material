import * as React from 'react';
import { createElement } from 'react';
import classNames from 'classnames';
import { bizCssPrefix } from '../../variables';
import './index.scss';

export interface RichTextProps {
  className?: string;
  style?: React.CSSProperties;
  content?: string;
  __designMode?: string;
}

const RichText: React.FC<RichTextProps> = function RichText(props) {
  const { style = {}, className, __designMode, content, ...otherProps } = props;

  let placeholder = '';
  if (__designMode == 'design' && !content) {
    style.minHeight = '20px';
    placeholder = `${bizCssPrefix}-placeholder`;
  }

  const cls = classNames({
    [`${bizCssPrefix}-richText`]: true,
    [className]: !!className,
    [placeholder]: !!placeholder,
  });

  return (
    <div
      className={cls}
      style={style}
      {...otherProps}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default RichText;
