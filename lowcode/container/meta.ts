import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const Meta: IPublicTypeComponentMetadata = {
  componentName: 'Container',
  title: '容器',
  docUrl: '',
  devMode: 'proCode',
  npm: {
    package: 'web-material',
    version: '0.1.0',
    exportName: 'Container',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'fluid',
            'zh-CN': '响应式宽度',
          },
        },
        name: 'fluid',
        setter: {
          componentName: 'SelectSetter',
          initialValue: false, // 设置默认值
          props: {
            options: [
              {
                title: '默认',
                value: false,
              },
              {
                title: '全屏',
                value: true,
              },
              {
                title: '手机(sm)',
                value: 'sm'
              },
              {
                title: '平板(sm)',
                value: 'md'
              },
              {
                title: '电脑(lg)',
                value: 'lg'
              },
              {
                title: '大屏(xl)',
                value: 'xl'
              },
              {
                title: '超大屏(xxl)',
                value: 'xxl'
              }
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
  category: '容器',
  group: '组件',
  priority: 9999,
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '容器',
    screenshot: '',
    schema: {
      componentName: 'Container',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  snippets,
};
