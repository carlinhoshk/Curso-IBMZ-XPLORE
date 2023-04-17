const http = require('http');
const { datasets } = require("zoau") // import the datasets class from the zoau module

const hostname = '0.0.0.0';
const port = process.env.PORT || 60245; // remember that xxxxx is your Zid number + 30000
let myname = process.env.LOGNAME;


function sendResponse(res, content, code, type) {
  res.statusCode = code;
  res.setHeader('Content-Type', type || 'text/plain');
  res.end(content)
}
const server = http.createServer((req, res) => {
  const basic = /^\/$/;
  const hello = /^\/hello\//;
  const data = /^\/data\/.*/ // "/data/<member>" 
  const member = /^\/data\/([A-Z0-9]+)$/i


  console.log(req.url)
  if (hello.test(req.url)) {
    //const name = req.url.replace(/^\/[^\/]*\/([A-Z0-9a-z]+).*$/, '$1')
    //sendResponse(res, `Hello ${name}!`, 200, 'text/plain')
  }

  if (basic.test(req.url)) {
    sendResponse(res, `Hello World from ${myname} on z/OS`, 200, 'text/plain')
  }

  if (data.test(req.url)) {
    
    const member = req.url.match(/^\/data\/([A-Z0-9]+)$/i)[1];
    const dsn = `ZXP.PUBLIC.SOURCE(${member})`;

    const dsopen = datasets.read(dsn).then(function (contents) {
      sendResponse(res, contents, 200, "text/plain")
    })

  }
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

