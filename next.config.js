module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["103.164.81.47"],
  },
};

const withImages = require("next-images");

module.exports = withImages({
  // 自定义图片和字体文件的目录
  images: {
    dir: "/src/public",
  },
});

const withTM = require("next-transpile-modules")(["antd-mobile"]);

const withPWA = require("next-pwa")({
  dest: "public",
});
const nextConfig = withTM({
  // 你项目中其他的 Next.js 配置
  output: "standalone",
  images: {
    domains: ["http://localhost:3000"],
  },
});

module.exports = withPWA(nextConfig);
