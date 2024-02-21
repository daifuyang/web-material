import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const Meta: IPublicTypeComponentMetadata = {
  componentName: 'Menu',
  title: '菜单',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'web-material',
    version: '0.1.0',
    exportName: 'Menu',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'items',
        title: '菜单项',
        setter: 'JsonSetter',
      },
      {
        name: 'fontSize',
        title: {
          label: '字体大小',
          tip: '菜单字体大小，单位px',
        },
        setter: 'NumberSetter',
        defaultValue: '16',
      },
      {
        name: 'color',
        title: {
          label: '字体颜色',
          tip: '菜单字体颜色',
        },
        setter: 'ColorSetter',
        defaultValue: '#000000',
      },
      {
        name: 'hoverColor',
        title: {
          label: '字体悬浮颜色',
          tip: '菜单字体悬浮颜色',
        },
        setter: 'ColorSetter',
        defaultValue: '#1677ff',
      },
      {
        name: 'bgColor',
        title: {
          label: '背景颜色',
          tip: '菜单背景颜色',
        },
        setter: 'ColorSetter',
        defaultValue: '',
      },
    ],
    component: { nestingRule: { parentWhitelist: ['Menu'] } },
    supports: {
      className: true,
      style: true,
      loop: false,
    },
    advanced: {},
  },
  experimental: {
    callbacks: {},
  },
  category: '布局',
  group: '菜单',
  priority: 9999,
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '导航栏',
    screenshot: '',
    schema: {
      componentName: 'Navbar',
      props: {},
      children: '',
    },
  },
];

export default {
  ...Meta,
  snippets,
};
