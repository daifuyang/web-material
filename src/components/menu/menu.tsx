import classNames from 'classnames';
import { createElement, CSSProperties } from 'react';
import Nav from 'react-bootstrap/Nav';

interface MenuItemType {
    key: string
    href: string
    label: string
    style: CSSProperties
}

export interface MenuProps {
    __designMode: string
    items: MenuItemType[]
    className: string
    style: CSSProperties
    color?: string
    bgColor?: string
    fontSize?: string
    hoverColor?: string
}

export default function Menu(props: MenuProps) {
    
    const { __designMode, items = [], className, style,color,bgColor,fontSize,hoverColor } = props
    if (__designMode === 'design' && items.length === 0) {
        return (
            <div>请先选择导航数据</div>
        )
    }

    const __className = classNames({
        [className]: !!className
    })

    const __style = {
        ...style,
        '--bs-navbar-color': color,
        '--bs-nav-link-hover-color': hoverColor,
       bgColor,
       fontSize
    }

    return (
        <Nav className={__className}>
            {
                items.map((item, index) => {
                    const href = __designMode === 'design' ? undefined : item.href
                    return (
                        <Nav.Link style={__style} key={item.key || index} href={href}>{item.label}</Nav.Link>
                    )
                })
            }
        </Nav>
    )
}