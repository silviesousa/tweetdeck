# tweetdeck

To run the app:

1. start the bundle-server.js, which will listen on port 8081; this file compiles the code in src/app.js and its dependencies into a single bundle which it serves from the url /bundle.js. It uses webpack-dev-middleware to do this.

2. run index.js on port 8080.
