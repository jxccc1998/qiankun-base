import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    // {
    //   path: '/childApp',
    //   microApp: 'childApp',
    // },
  ],
  fastRefresh: {},
  qiankun: {
    master: {
      apps: [
        {
          name: 'childApp',
          // entry: 'http://print-test.moogozero.com'
          entry: '//localhost:8080'
        }
      ]
    }
  }
});
