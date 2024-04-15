import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const Meta: IPublicTypeComponentMetadata = {
  componentName: 'Navbar',
  title: '导航栏',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'web-material',
    version: '0.1.0',
    exportName: 'Navbar',
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
            'en-US': 'brand',
            'zh-CN': '品牌',
          },
        },
        name: 'brand',
        setter: {
          componentName: 'SlotSetter',
          isRequired: true,
          props: {
            mode: 'node',
          },
          initialValue: {
            type: 'JSSlot',
            value: [
              {
                componentName: 'Image',
                props: {
                  src: '',
                  alt: 'logo',
                  width: 64,
                },
                hidden: false,
                title: '',
                isLocked: false,
                condition: true,
                conditionGroup: '',
              },
            ],
          },
        },
      },
      {
        name: 'menuAlign',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'menuAlign',
            'zh-CN': '菜单对齐',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          initialValue: 'right', // 设置默认值
          props: {
            options: [
              {
                title: '居左',
                value: 'left',
              },
              {
                title: '居中',
                value: 'center',
              },
              {
                title: '居右',
                value: 'right',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'menu',
            'zh-CN': '菜单',
          },
        },
        name: 'menu',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node',
          },
          initialValue: {
            type: 'JSSlot',
            value: [
              {
                componentName: 'NextMenu',
                props: {},
                hidden: false,
                title: '',
                isLocked: false,
                condition: true,
                conditionGroup: '',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'extra',
            'zh-CN': '扩展',
          },
        },
        name: 'extra',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node',
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
  category: '容器',
  group: '组件',
  priority: 9999,
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '导航栏',
    screenshot: '',
    schema: {
      componentName: 'Navbar',
      props: {},
      children: '',
    },
  },
];

export default {
  ...Meta,
  snippets,
};
