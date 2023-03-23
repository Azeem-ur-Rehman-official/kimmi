const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: "https://trading-da.varcity.io/api/",
      changeOrigin: true,
    })
  );
};