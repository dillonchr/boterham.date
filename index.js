const { join } = require("path");
const serveStatic = require("serve-static");
const connect = require("connect");
const http = require("http");
const app = connect();

const serve = serveStatic("txt", { index: ["index.txt"] });

const compression = require("compression");
app.use(compression());

app.use((req, res) => {
  serve(req, res, () => {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 m8.");
  });
});

http.createServer(app).listen(3000);
