const express = require('express');

const app = express();

// if not timestamp is provided use the time of right now
app.get('/api/timestamp/', (req, res) => {
    const date = new Date();
    res.json({ unix: date.getTime(), utc: date.toUTCString() });
});

app.get('/api/timestamp/:date_string', (req, res) => {
    let { date_string } = req.params;
    date_string = new Date(parseInt(date_string));

    if (!Date.parse(date_string)) {
        res.json({ error: 'Invalid Date' });
    }
    const date = new Date(date_string);

    res.json({ unix: date.getTime(), utc: date.toUTCString() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
