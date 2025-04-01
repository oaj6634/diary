const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'test',
      version: '1.0.0',
      description: 'test',
    },
    // host: 'localhost:3000',
    // basePath: '/',
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./dist/routes/*.js', '/swagger/'],
};

export default options;
