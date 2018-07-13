const express = require('express');

const app = express();

// if not timestamp is provided use the time of right now
app.get('/api/timestamp/', (req, res) => {
    const date = new Date();

    res.json({ unix: date.getTime(), utc: date.toUTCString() });
});

app.get('/api/timestamp/:time', (req, res) => {
    if (!Date.parse(req.params.time)) {
        res.json({ error: 'Invalid Date' });
    }
    const date = new Date(req.params.time);

    res.json({ unix: date.getTime(), utc: date.toUTCString() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
