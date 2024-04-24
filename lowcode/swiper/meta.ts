import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const Meta: IPublicTypeComponentMetadata = {
  componentName: 'Swiper',
  title: '轮播图',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'web-material',
    version: '0.1.0',
    exportName: 'Swiper',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'items',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'src',
            'zh-CN': '轮播项',
          },
        },
        setter: 'JsonSetter',
      },
      {
        name: 'navigation',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'navigation',
            'zh-CN': '导航按钮',
          },
        },
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'pagination',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'pagination',
            'zh-CN': '分页器',
          },
        },
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'autoplay',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoplay',
            'zh-CN': '自动滚动',
          },
        },
        setter: 'BoolSetter',
        defaultValue: true,
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
    title: '轮播图',
    screenshot: '',
    schema: {
      componentName: 'Swiper',
      props: {},
      children: '',
    },
  },
];

export default {
  ...Meta,
  snippets,
};
