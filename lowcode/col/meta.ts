import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const Meta: IPublicTypeComponentMetadata = {
  componentName: 'Col',
  title: '栅格一列',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'web-material',
    version: '0.1.0',
    exportName: 'Col',
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
            'en-US': 'xs count',
            'zh-CN': 'xs格数',
          },
          tip: '超小屏幕(设备<576px)',
        },
        name: 'xs',
        setter: 'NumberSetter',
        defaultValue: 6,
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'sm count',
            'zh-CN': 'sm格数',
          },
          tip: '小屏幕(设备>576px)',
        },
        name: 'sm',
        setter: 'NumberSetter',
        defaultValue: 6,
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'md count',
            'zh-CN': 'md格数',
          },
          tip: '中等屏幕(设备>768px)',
        },
        name: 'md',
        setter: 'NumberSetter',
        defaultValue: 6,
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'md count',
            'zh-CN': 'lg格数',
          },
          tip: '大屏幕(设备>992px)',
        },
        name: 'lg',
        setter: 'NumberSetter',
        defaultValue: 6,
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'md count',
            'zh-CN': 'xl格数',
          },
          tip: '特大屏幕(设备>1200px)',
        },
        name: 'xl',
        setter: 'NumberSetter',
        defaultValue: 6,
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'md count',
            'zh-CN': 'xxl格数',
          },
          tip: '大屏幕(设备>1400px)',
        },
        name: 'xxl',
        setter: 'NumberSetter',
        defaultValue: 6,
      },
    ],
    component: { isContainer: true, nestingRule: { parentWhitelist: ['Row'] } },
    supports: {
      className: true,
      style: true,
      loop: true,
    },
    advanced: {},
  },
  experimental: {
    callbacks: {},
  },
  category: '布局',
  group: '组件',
  priority: 9998,
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '栅格一列',
    screenshot: '',
    schema: {
      componentName: 'Col',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  snippets,
};
