import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const Meta: IPublicTypeComponentMetadata = {
  componentName: 'Link',
  title: '链接',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'web-material',
    version: '0.1.0',
    exportName: 'Link',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'children',
        title: {
          label: '内容',
        },
        setter: 'TextAreaSetter',
        defaultValue: '默认链接',
      },
      {
        name: 'href',
        title: {
          label: '跳转链接',
        },
        setter: 'StringSetter',
        defaultValue: '',
      },
      {
        name: 'target',
        title: {
          label: '跳转位置',
          tip: '在何处显示链接的资源',
        },
        setter: {
          componentName: 'SelectSetter',
          initialValue: '_self',
          props: {
            mode: 'single',
            options: [
              {
                title: '当前窗口',
                value: '_self',
              },
              {
                title: '新窗口',
                value: '_blank',
              },
              {
                title: '父窗口',
                value: '_parent',
              },
              {
                title: '顶级窗口',
                value: '_top',
              },
            ],
          },
        },
      },
    ],
    supports: {
      className: true,
      style: true,
      loop: true,
    },
    component: {
      isContainer: true, // 容器组件
    },
    advanced: {},
  },
  experimental: {
    callbacks: {},
  },
  category: '基础',
  group: '组件',
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '链接',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/typography-link-1.png',
    schema: {
      componentName: 'Link',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  snippets,
};
