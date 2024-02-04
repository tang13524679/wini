module.exports = {
  apps: [
    {
      name: "node-ssr",
      script: "./server.js",
      autorestart: false,
      watch: false,
      env: {
        PORT: 8082,
        HOSTNAME: "0.0.0.0",
        NODE_ENV: "production",
      },
    },
  ],
};
