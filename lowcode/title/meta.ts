import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const Meta: IPublicTypeComponentMetadata = {
  componentName: 'Title',
  title: '标题',
  docUrl: '',
  screenshot:
    'https://img.alicdn.com/imgextra/i4/O1CN01E2PcPW1bKJV5QUVMg_!!6000000003446-55-tps-50-50.svg',
  devMode: 'proCode',
  npm: {
    package: 'web-material',
    version: '0.1.0',
    exportName: 'Title',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'children',
        title: {
          label: '标题内容',
          tip: '',
        },
        setter: 'StringSetter',
        defaultValue: '',
      },
      {
        name: 'level',
        title: {
          label: '标题',
          tip: '按钮显示的标题',
        },
        setter: {
          componentName: 'SelectSetter',
          initialValue: 1,
          props: {
            mode: 'single',
            options: [
              {
                title: 'h1',
                value: 1,
              },
              {
                title: 'h2',
                value: 2,
              },
              {
                title: 'h3',
                value: 3,
              },
              {
                title: 'h4',
                value: 4,
              },
              {
                title: 'h5',
                value: 5,
              },
              {
                title: 'h6',
                value: 6,
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
const snippets:IPublicTypeSnippet[] = [
  {
    title: '标题',
    screenshot:
      'https://img.alicdn.com/imgextra/i4/O1CN01E2PcPW1bKJV5QUVMg_!!6000000003446-55-tps-50-50.svg',
    schema: {
      componentName: 'Title',
      props: {},
      children: '',
    },
  },
];

export default {
  ...Meta,
  snippets,
};