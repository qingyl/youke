const os = require("os");
const networkInterfaces = os.networkInterfaces();
const ip = Object.values(networkInterfaces)[0][1].address;
const path = require("path");
const resolve = dir => {
  return path.join(__dirname, dir);
};

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/", //production build打包的
  outputDir: "dist", //build 打包路径
  assetsDir: "", //放置静态的资源
  indexPath: "index.html", //指定build 打包后的输入文件
  filenameHashing: true, //是否构建成静态文件为哈希值（hash）如：a.333xxx.js
  pages: undefined, //多页面开发配置项
  lintOnSave: false, //是否输出警告
  runtimeCompiler: false, //建议不开启
  transpileDependencies: [], //按需求配置
  productionSourceMap: false, //build 打包去除source map
  crossorigin: undefined,
  integrity: false,
  configureWebpack: () => {
    //返回config
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
    } else {
      // eslint-disable-next-line no-console
      // 为开发环境修改配置...
    }
  },
  chainWebpack: config => {
    //配置相对路径方式
    config.resolve.alias
      .set("@", resolve("src"))
      .set("components", resolve("src/components"));
    // .set("assets", resolve("src/assets"))
    // .set("static", resolve("src/static"));
  },
  css: {
    modules: false,
    sourceMap: false, //关闭source map
    loaderOptions: {
      css: {
        localIdentName: "[name]-[hash]",
        camelCase: "only"
      },
      less: {
        javascriptEnabled: true,
        modifyVars: {
          color: "#03a9f4",
          blue: "#3eaf7c",
          orange: "#f08d49",
          "text-color": "#111"
        }
      },
      sass: {
        // data: `@import "@/assets/color.sass";` //共享全局配置
      },
      stylus: {}
    }
  },
  devServer: {
    host: ip,
    port: `8089`,
    // 代理链接配置
    proxy: {
      "/": {
        target: "http://api.xuandan.com/DataApi/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  parallel: require("os").cpus().length > 1,
  // 向 PWA 插件传递选项
  pwa: {},
  pluginOptions: {}
};
