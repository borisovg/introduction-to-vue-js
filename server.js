'use strict';

const framework = require('@borisovg/web-framework');
const http = require('http');

const app = new framework.App();
const server = http.createServer(app.router);

app.use(framework.middleware.static({ path: './public' }));

server.listen(8080, () => {
    console.log('Go to http://localhost:8080/index.html');
});
