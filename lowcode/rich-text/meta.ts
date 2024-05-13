import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const RichTextMeta: IPublicTypeComponentMetadata = {
  componentName: 'RichText',
  title: '富文本',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'web-material',
    version: '0.1.0',
    exportName: 'RichText',
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
            'en-US': 'text',
            'zh-CN': '文本内容',
          },
          tip: '',
        },
        name: 'content',
        setter: 'TextAreaSetter',
        defaultValue: '',
      },
    ],
    supports: {
      style: true,
    },
    component: {},
  },
  category: '基础',
  group: '组件',
};

const snippets: IPublicTypeSnippet[] = [
  {
    title: '富文本',
    screenshot: '',
    schema: {
      componentName: 'RichText',
      props: {
        children: '',
      },
    },
  },
];

export default {
  ...RichTextMeta,
  snippets,
};
