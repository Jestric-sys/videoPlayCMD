const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/video', (req, res) => {
    const range = req.headers.range;
    if (!range) res.status(400).send('Requires Range header');
    const videoPath = 'test2.mp4';
    const videoSize = fs.statSync(videoPath).size;
    const CHUNK_SIZE = 10 ** 6;
    const start = Number(range.replace(/\D/g, ''));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    const contentLength = end - start + 1;
    const headers = {
        'Content-Range' : `bytes ${start}-${end}/${videoSize}`,
        'Accept-Ranges' : 'bytes',
        'Content-Length' : contentLength,
        'Content-Type' : 'video/mp4'
    };
    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(videoPath, { start, end });
    videoStream.pipe(res);
});

app.get('/test', (req, res) => {
    const test = fs.readFileSync('video.mp4');
    const test2 = fs.readFileSync('video1.mp4');
    // console.log(test + test2);
    const buf = Buffer.from(test + test2);
    console.log(fs.statSync(buf).size);
    console.log(buf);
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log(`Server starting http://localhost:3000`);
});