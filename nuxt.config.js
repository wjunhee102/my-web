export default {
  mode: 'universal',

  target: 'static',

  // server: {
  //   host: '0.0.0.0',
  //   port: 4000,
  // },
  router: {
    base: 'https://wjunhee102.github.io/my-web/'
  },

  generate: {
    fallback: true
  }

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Junhee-Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '~assets/css/tailwind.css'
  ],

  plugins: [
  ],

  components: [
    '~components/public',
    { path: '~components/layouts/public', prefix: 'layout'}
  ],

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  // modules: [
  //   'nuxt-healthcheck'
  // ],

  // tailwind가 적용이 안되는 것을 위해 방지
  purgeCSS: {
    enabled: false
  },

  build: {
    extractCSS: true,
  },

  // healthcheck: {
  //   path: '/health',
  //   contentType: 'application/json',
  //   healthy: () => {
  //     return JSON.stringify({ result: 'OK' });
  //   }
  // }
}
