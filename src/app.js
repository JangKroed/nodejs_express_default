const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
// const router = require('./api/routes/index');
const env = require('./config.env');

const app = express();

app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());
app.use(cors({ origin: [env.FRONT_END_URL], credentials: true }));
// app.use('/', router);

app.get('/api/healthChecker', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'Welcom to Web',
    });
});

app.all('*', (req, res, next) => {
    const err = new Error(`Route ${req.origin} not found`);
    err.statusCode = 404;
    next(err);
});

app.use((err, req, res, next) => {
    err.status = err.status || 'error';
    err.statusCode = err.statusCode || 500;

    res.status(err.statusCode).json({
        status: err.status,
        msg: err.message,
    });
});

module.exports = app;
