const http = require('http');

const hostname = '0.0.0.0';
const port = 60245;             //replace the xxxx with the correct port nr.

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  myname = process.env.LOGNAME
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello World from ${myname} on z/OS`)
  server.close()
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
