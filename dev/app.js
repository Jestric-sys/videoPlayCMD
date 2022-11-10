const fs = require('fs');

const test = fs.readFileSync('test.mp4');
const test2 = fs.readFileSync('test2.mp4');

const newArr = [test, test2];

const stream = fs.createWriteStream(`newTest.mp4`);

for (let i = 0; i < newArr.length; i++) {

    stream.on('error', (err) => console.log(`Err: ${err}`));
    stream.on('finish', () => console.log('Done'));

    stream.write(newArr[i]);
};

stream.end();