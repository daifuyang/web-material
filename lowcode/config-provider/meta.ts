
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const configProviderMeta: IPublicTypeComponentMetadata = {
  "componentName": "configProvider",
  "title": "configProvider",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "web-material",
    "version": "0.1.0",
    "exportName": "configProvider",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "as",
            "zh-CN": "as"
          }
        },
        "name": "as",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "a",
                      "zh-CN": "a"
                    }
                  },
                  "name": "a",
                  "setter": {
                    "componentName": "MixedSetter",
                    "props": {
                      "setters": [
                        {
                          "componentName": "StringSetter",
                          "isRequired": false,
                          "initialValue": ""
                        },
                        {
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "extraSetter": {
                                "componentName": "MixedSetter",
                                "isRequired": false,
                                "props": {}
                              }
                            }
                          },
                          "isRequired": false,
                          "initialValue": {}
                        }
                      ]
                    },
                    "isRequired": true
                  }
                }
              ],
              "extraSetter": {
                "componentName": "MixedSetter",
                "isRequired": false,
                "props": {}
              }
            }
          },
          "isRequired": true
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "configProvider",
    "screenshot": "",
    "schema": {
      "componentName": "configProvider",
      "props": {}
    }
  }
];

export default {
  ...configProviderMeta,
  snippets
};
