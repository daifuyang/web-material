import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const Meta: IPublicTypeComponentMetadata = {
  componentName: 'Button',
  title: '按钮',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'web-material',
    version: '0.1.0',
    exportName: 'Button',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'children',
        title: {
          label: '标题',
          tip: '',
        },
        setter: 'StringSetter',
        defaultValue: '按钮',
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'variant',
            'zh-CN': '类型',
          },
        },
        name: 'variant',
        description: '主题色',
        setter: {
          componentName: 'SelectSetter',
          initialValue: 'primary', // 设置默认值
          props: {
            options: [
              { title: '主要', value: 'primary' },
              { title: '次要', value: 'secondary' },
              { title: '成功', value: 'success' },
              { title: '危险', value: 'danger' },
              { title: '警告', value: 'warning' },
              { title: '信息', value: 'info' },
              { title: '深色', value: 'dark' },
              { title: '浅色', value: 'light' },
              { title: '链接', value: 'link' },
            ],
          },
        },
      },
      {
        name: 'outline',
        title: {
          label: '风格',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          initialValue: false, // 设置默认值
          props: {
            options: [
              {
                title: '默认',
                value: false,
              },
              {
                title: '镂空',
                value: true,
              },
            ],
          },
        },
      },
    ],
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
  category: '基础',
  group: '组件',
  priority: 9999,
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '按钮',
    screenshot: '',
    schema: {
      componentName: 'Button',
      props: {},
      children: '',
    },
  },
];

export default {
  ...Meta,
  snippets,
};
