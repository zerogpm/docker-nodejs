const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'applicaiton/json'
    });
    res.end(JSON.stringify({
        id: 1,
        name: 'we are the best here'
    }));
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
}); //127.0.0.1 => localhost