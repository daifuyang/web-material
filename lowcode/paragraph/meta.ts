import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ParagraphMeta: IPublicTypeComponentMetadata = {
  componentName: 'Paragraph',
  title: 'Paragraph',
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
      },
    ],
    supports: {
      style: true,
    },
    component: {},
  },
};

const snippets: IPublicTypeSnippet[] = [
  {
    title: 'Paragraph',
    screenshot: '',
    schema: {
      componentName: 'Paragraph',
      props: {
        children: '这是一段文本',
      },
    },
  },
];

export default {
  ...ParagraphMeta,
  snippets,
};
