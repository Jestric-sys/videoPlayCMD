const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const { getVideoDurationInSeconds } = require('get-video-duration');

app.use(cors());
app.get('/video', (req, res) => {
    let allTime = 0;
    const arrayVideo = [
        {
            path: './video.mp4',
            size: ''
        },
        {
            path: './video2.mp4',
            size: ''
        }
    ];

    for (let i = 0; i < arrayVideo.length; i++) {
        const stream = fs.createReadStream(arrayVideo[i].path);
        getVideoDurationInSeconds(stream)
            .then((duration) => {
                arrayVideo[i].size = Math.floor(duration);
                allTime = allTime + Math.floor(duration);
                //console.log(arrayVideo[i]);
            });
    };
    res.status(200).json(arrayVideo[req.query.number]);
});

app.listen(3000, () => {
    console.log('Server starting http://localhost:3000');
});