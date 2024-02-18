import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ParagraphMeta: IPublicTypeComponentMetadata = {
  componentName: 'Paragraph',
  title: '段落',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'web-material',
    version: '0.1.0',
    exportName: 'Paragraph',
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
        name: 'children',
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
    title: '段落',
    screenshot: '',
    schema: {
      componentName: 'Paragraph',
      props: {
        children: '',
      },
    },
  },
];

export default {
  ...ParagraphMeta,
  snippets,
};
