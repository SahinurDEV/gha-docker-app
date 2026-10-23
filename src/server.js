import http from 'node:http';

export const message = 'Hello from a container, built by GitHub Actions';

const port = process.env.PORT || 3000;
if (process.argv[1] && process.argv[1].endsWith('server.js')) {
  http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(message + '\n');
  }).listen(port, () => console.log(`Listening on port ${port}`));
}
