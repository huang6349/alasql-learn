export default {
  treeShaking: true,
  plugins: [
    [
      'umi-plugin-react',
      {
        dva: {
          immer: true,
        },
        antd: true,
        routes: {
          exclude: [
            /components\//,
            /hooks\//,
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
          ],
        },
        locale: {},
        dynamicImport: {
          webpackChunkName: true,
        },
        dll: false,
        hardSource: false,
        pwa: false,
        hd: false,
        fastClick: false,
        title: 'basic-project-template',
      },
    ],
  ],
  history: 'hash',
  targets: {
    ie: 9,
  },
  theme: {
    '@primary-color': '#5182e4', // 全局主色
    '@link-color': 'rgba(10, 18, 32, 0.64)', // 链接色
    '@text-color': 'rgba(10, 18, 32, 0.64)', // 主文本色
    '@text-color-secondary': 'rgba(10, 18, 32, 0.44)', // 次文本色
    '@disabled-color': 'rgba(10, 18, 32, 0.24)', // 失效色
    '@border-radius-base': '2px', // 组件/浮层圆角
    '@table-padding-vertical': '10px', // 表格垂直内距
    '@table-padding-horizontal': '12px', // 表格水平内距
  },
};
