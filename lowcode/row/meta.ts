import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const Meta: IPublicTypeComponentMetadata = {
  componentName: 'Row',
  title: '栅格一行',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'web-material',
    version: '0.1.0',
    exportName: 'Row',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [],
    component: { isContainer: true, nestingRule: { childWhitelist: ['Col'] } },
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
  group: '组件',
  priority: 9999,
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '栅格一行',
    screenshot: '',
    schema: {
      componentName: 'Row',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  snippets,
};
