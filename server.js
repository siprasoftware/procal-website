const express = require("express");
const path = require("path");
const enforce = require("express-sslify");

const PORT = process.env.PORT || 5000;
const BASE_DIR = process.env.BASE_DIR || "./";
const INDEX_PATH = path.join(__dirname, BASE_DIR, "dist", "index.html");

const app = express();

// Use enforce.HTTPS({ trustProtoHeader: true }) in case you are behind
// a load balancer (e.g. Heroku). See further comments below
app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.use(express.static(path.join(BASE_DIR, "dist")));

app.get("/*", function (_, res) {
  res.sendFile(INDEX_PATH);
});

app.listen(PORT, () =>
  console.log(`Listening on ${PORT} redirecting to ${INDEX_PATH}`)
);
