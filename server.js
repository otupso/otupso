const express = require('express');
const app = express();

const port = 8888 || process.env.PORT;

app.listen(port, () => (
    console.log(`Open in http://localhost:${port}`)
));
