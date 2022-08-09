export default {
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "George Soteriou",
    title: "George Soteriou",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    script: [
      {
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
        "data-ad-client": "ca-pub-7552803612952968",
        async: true
      },
    ],
    link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@plugins/vuetify"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  target: "static",
  ssr: false,
  build: {
    transpile: ["@gitgraph/js/lib", "pdfvuer"],
    extend(config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.(pdf)(\?.*)?$/,
        loader: "url-loader"
      });
      // Web Worker support
      if (isClient) {
        config.module.rules.push({
          test: /\.worker\.js$/,
          use: { loader: "worker-loader" },
          exclude: /(node_modules)/
        });
      }
    }
  }
};
