export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  server: {
    port: 8000, //default: 3000
    host: "0.0.0.0", // default: localhost
  },

  target: "static",

  head: {
    title: "Project Catalogue",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/logo-fix.png" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
      },
    ],
    scripts: [
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
        body: true,
      },
    ],
  },

  loading: "~/components/Loader.vue",

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["nuxt-windicss"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/pwa"],

  axios: { baseURL: "https://fakestoreapi.com/" },

  pwa: {
    meta: {
      title: "Prolog",
      author: "Me",
    },
    manifest: {
      name: "Product Catalogue",
      short_name: "PWA Catalogue",
      lang: "en",
      display: "standalone",
    },
    icon: {
      source: "static/logo-fix.png",
      filename: "logo-fix.png",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
