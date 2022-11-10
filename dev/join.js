const fs = require('fs');
const cp = require('node:child_process');

const test = ['test.mp4', 'test2.mp4'];

for (let i = 0; i < test.length; i++) {
    fs.appendFileSync('file.txt', `file ${test[i]}\r\n`, {flag: 'a'});
};

fs.mkdirSync('data', { recursive: true });

cp.execSync('ffmpeg -f concat -i file.txt -c copy data/output.mp4');