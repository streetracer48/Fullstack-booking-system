const express = require('express');
const app = express();

const port = process.env.PORT || 3002;

app.listen(port, () => {
     console.log(`Server Lising on port ${port}`);
})