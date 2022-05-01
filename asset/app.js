const express = require('express');
const app = express();
const port = process.env.PORT || 8081;

app.use(express.static('./'));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});