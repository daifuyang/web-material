import * as React from 'react';

import { createElement, createContext, Component } from "react";

interface AS {
    a: string | Component;
}

export interface ConfigProviderProps {
    as?: AS;
    children: React.ReactNode;
}

// 创建一个全局配置的上下文

const defaultValue: {as: AS} = {
    as : {
        a: 'a'
    }
}

const ConfigContext = createContext(defaultValue);

export const useConfig = () => {
    return React.useContext(ConfigContext);
}

// 提供者组件，用于设置全局配置
export default function ConfigProvider(props: ConfigProviderProps) {

    const { as, children } = props;

    return (
        <ConfigContext.Provider value={{ as }}>
            {children}
        </ConfigContext.Provider>
    );
}