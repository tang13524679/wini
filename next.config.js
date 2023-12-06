module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // images: {
  //     domains: [
  //         'firebasestorage.googleapis.com',
  //         '103.164.81.205:7078'
  //     ],
  // },
};

const withImages = require("next-images");

module.exports = withImages({
  // 自定义图片和字体文件的目录
  images: {
    dir: "/src/public",
  },
});

const withTM = require("next-transpile-modules")(["antd-mobile"]);

module.exports = withTM({
  // 你项目中其他的 Next.js 配置
  output: "standalone",
});
