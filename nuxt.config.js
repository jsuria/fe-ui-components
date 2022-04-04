export default {
    build: {
      postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    css: [
        '@/assets/css/main.css',
    ],
    components: [
        {
          path: '~/components', // will get any components nested in let's say /components/test too
          pathPrefix: false,
        },
    ],
    buildModules: ['@nuxtjs/tailwindcss']
  }