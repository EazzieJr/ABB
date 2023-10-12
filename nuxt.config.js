export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 8080,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ABB Icons',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "250+ meticulously designed icons for seamless web, app, and mobile perfection. Suitable for any kind of project now available for download in your favourite format." },
      { hid: 'keywords', name: 'keywords', content: "ABB, Abb, Abbicons, Icons, ABB Icons, Adobe illustrations, svg, figma, Abbicons figma, Abbicons, Graphics, Carol ugwu, carol, ugwu" },
      { name: 'format-detection', content: 'telephone=no' },

      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: 'ABB Icons' },
      { hid: 'og:url', name: 'og:url', content: "https://abbicons.com" },
      { hid: 'og:site_name', name: 'og:site_name', content: "ABB Icons" },
      { hid: 'og:image', name: 'og:image', content: "/poster-image.webp" },
      { hid: 'og:description', name: 'og:description', content: "250+ meticulously designed icons for seamless web, app, and mobile perfection. Suitable for any kind of project now available for download in your favourite format." },

      { hid: 'twitter:site', name: 'twitter:site', content: "@CarolUgwu" },
      { hid: 'twitter:title', name: 'twitter:title', content: 'ABB Icons' },
      { hid: 'twitter:card', name: 'twitter:card', content: "summary_large_image" },
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: "An image of the landing page hero" },
      { hid: 'twitter:image', name: 'twitter:image', content: "/poster-image.webp" },
      { hid: 'twitter:description', name: 'twitter:description', content: "250+ meticulously designed icons for seamless web, app, and mobile perfection. Suitable for any kind of project now available for download in your favourite format." },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [{ rel: 'stylesheet', href: 'https://unpkg.com/flickity@2/dist/flickity.min.css' }],
    // link: [{ rel: 'stylesheet', href: 'https://unpkg.com/mouse-follower@1/dist/mouse-follower.min.css' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/tailwind/tailwind.css', '@/assets/main.css', '@/assets/cursor.css', 'splitting/dist/splitting-cells.css', 'splitting/dist/splitting.css'],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '@/plugins/vue-flickity.js', mode: 'client' },
    { src: '~/plugins/splitting.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-route-meta'
  ],

  toast: {
    theme: "bubble",
    position: 'top-center',
    register: [ // Register custom toasts
      {
        name: 'ab-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      },
      {
        name: 'ab-success',
        message: "Hey, your message is on it's way",
        options: {
          type: 'success'
        }
      },
    ]
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["gsap"],
    
    postcss: {
      postcssOptions: {
        plugins: {
          'tailwindcss/nesting': {},
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
}
