import http from 'http';
import app from './app';

const port = process.env.PORT || 2000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is listening at port ${port}.`);
});
