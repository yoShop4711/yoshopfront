const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/auth',
    createProxyMiddleware({
      target: 'https://yoshopapi.onrender.com',
      changeOrigin: true,
    }),
    

  ),
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://yoshopapi.onrender.com/',
      changeOrigin: true,
    }),
    

  ),
  
  app.use(
    '/cart',
    createProxyMiddleware({
      target: 'https://yoshopapi.onrender.com/',
      changeOrigin: true,
    }),
    
  ),
  app.use(
    '/wish',
    createProxyMiddleware({
      target: 'https://yoshopapi.onrender.com/',
      changeOrigin: true,
    }),
  


  ),
  app.use(
    '/message',
    createProxyMiddleware({
      target: 'https://yoshopapi.onrender.com/',
      changeOrigin: true,
    }),
  


  )
  
  


};

