import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const Meta: IPublicTypeComponentMetadata = {
  componentName: 'Divider',
  title: '分割线',
  docUrl: '',
  devMode: 'proCode',
  npm: {
    package: 'web-material',
    version: '0.1.0',
    exportName: 'Divider',
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
    title: '分割线',
    screenshot: '',
    schema: {
      componentName: 'Divider',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  snippets,
};
