const express = require('express');

const app = express();

// if not timestamp is provided use the time of right now
app.get('/api/timestamp/', (req, res) => {
    const date = new Date();

    res.json({ unix: date.getTime(), utc: date.toUTCString() });
});

app.get('/api/timestamp/:date_string', (req, res) => {
    const { date_string } = req.params;
    let date = Number(date_string) || date_string;
    date = new Date(date);

    if (isNaN(date)) {
        res.json({ error: 'Invalid Date' });
        return;
    }
    res.json({ unix: date.getTime(), utc: date.toUTCString() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
