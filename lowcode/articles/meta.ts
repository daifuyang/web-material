import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicModelSettingField, IPublicModelSettingField } from '@alilc/lowcode-types';

const Meta: IPublicTypeComponentMetadata = {
  componentName: 'Articles',
  title: '文章列表',
  docUrl: '',
  devMode: 'proCode',
  npm: {
    package: 'web-material',
    version: '0.1.0',
    exportName: 'Div',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'catgory',
        title: {
          label: '选择分类',
        },
        setter: 'ArticlesSetter',
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
  category: '高级',
  group: '组件',
  priority: 9999,
};

const snippets: IPublicTypeSnippet[] = [
  {
    title: '文章列表',
    screenshot: '',
    schema: {
      componentName: 'Articles',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  snippets,
};
