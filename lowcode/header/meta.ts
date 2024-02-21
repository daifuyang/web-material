import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const Meta: IPublicTypeComponentMetadata = {
  componentName: 'Header',
  title: '公共头部',
  docUrl: '',
  devMode: 'proCode',
  npm: {
    package: 'web-material',
    version: '0.1.0',
    exportName: 'Header',
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
      disableBehaviors: '*',
    },
    advanced: {
      callbacks: {
        onMoveHook() {
          return false;
        },
      },
    },
  },
  experimental: {
    callbacks: {},
  },
  category: '容器',
  group: '组件',
  priority: 9999,
};
const snippets: IPublicTypeSnippet[] = [
  
];

export default {
  ...Meta,
  snippets,
};
