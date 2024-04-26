import * as React from 'react';
import { createElement } from 'react';
import { useConfig } from '../configProvider';

export interface LinkProps {
    as ?: string | React.ReactNode
    link?: keyof JSX.IntrinsicElements;
    href?: string;
    target: '_self' | '_blank' | '_parent' | '_top';
    style: React.CSSProperties;
    className?: string;
    /**
     * 孩子节点
     */
    children?: React.ReactNode;
    __designMode?: string;
}

const Link: React.FC<LinkProps> = (props) => {
    const {
        as: linkAs,
        link,
        href,
        children = '默认链接',
        style,
        className,
        target,
        __designMode,
    } = props;

    let _href = href;

    if (__designMode === 'design') {
        _href = undefined;
    }

    const { as } = useConfig()

    let LinkRender: keyof JSX.IntrinsicElements = linkAs || as.a ||'a';
    if (link && !!_href) {
        LinkRender = link;
    }

    return (
        <LinkRender href={_href} style={style} className={className} target={target}>
            {children}
        </LinkRender>
    );
};
Link.displayName = 'Link';
export default Link;