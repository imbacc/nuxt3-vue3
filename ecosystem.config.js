module.exports = {
  apps: [
    {
      name: 'nuxt-app',
      instances: 2,
      exec_mode: 'cluster',
      script: './server/index.mjs',
      // script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      ignore_watch: ['node_modules', 'logs'],
      // env: {
      //   // 环境参数，当前指定为生产环境 process.env.NODE_ENV
      //   NODE_ENV: 'production',
      //   CROSS_ENV: 'production',
      // },
      // env_production: {
      //   NODE_ENV: 'production',
      // },
      server: {
        port: 3000, // default: 3000
        host: '0.0.0.0', // default: localhost
      },
    },
  ],
}
