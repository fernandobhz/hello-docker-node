const express = require("express");

const { log } = console;

const port = 10290;
const app = express();

const healthCheck = (req, res) => {
    res.send("ok")
}

app.get("/", healthCheck);
app.get("/broker", healthCheck);
app.get("/health-check", healthCheck);

app.listen(port, () => {
    log(`Server is up and running on port ${port}`)
});
