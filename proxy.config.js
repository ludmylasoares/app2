const proxy = [
    {
      context: '/api',
      target: 'https://localhost:3000',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;