import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const Meta: IPublicTypeComponentMetadata = {
  componentName: 'Div',
  title: '分组',
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
    title: '分组',
    screenshot: '',
    schema: {
      componentName: 'Div',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  snippets,
};
