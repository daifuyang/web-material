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
        name: 'src',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'src',
            'zh-CN': '图片地址',
          },
          tip: '',
        },
        setter: 'StringSetter',
        defaultValue: '',
      },
      {
        name: 'width',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'width',
            'zh-CN': '图片宽度',
          },
          tip: '',
        },
        setter: 'StringSetter',
        defaultValue: '',
      },
      {
        name: 'height',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'width',
            'zh-CN': '图片高度',
          },
          tip: '',
        },
        setter: 'StringSetter',
        defaultValue: '',
      },
      {
        name: 'alt',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'alt',
            'zh-CN': '图片描述',
          },
          tip: '',
        },
        setter: 'StringSetter',
        defaultValue: 'logo',
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
