const express = require('express');

const app = express();

app.use(express.static('public'));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`serving at http://localhost:${PORT}`));
