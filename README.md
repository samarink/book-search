# Search Book App

## An app to search and view books
[LIVE DEMO](https://nervous-almeida-eef2c7.netlify.app/)
### Running a copy on your local machine

The easiest way to run your local copy is to simply execute the following command: \

```bash
git clone https://github.com/samarink/book-search && \
  cd book-search && \
  npm install && \
  npm start && \
  xdg-open http://localhost:3000/
```

That will open an app in your browser of choice on a port 3000. \
Make sure it's open (`fuser -k 3000/tcp` to free it). Or change the port manually inside `webpack.config.js` file

#### Available npm scripts

`npm start` \
 start an app with optimised bundle \
`npm run start:dev` \
 start an app using development bundle \
`npm run build` \
 build optimised bundle into the build directory \
`npm run build:dev` \
 build development bundle into the build directory
