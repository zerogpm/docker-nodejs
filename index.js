const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            id: 1,
            name: 'we sare the best here'
        }));
    }

    if (req.url === '/message') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>we are ok</h1>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
}); //127.0.0.1 => localhost