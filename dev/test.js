const fs = require('fs');


const test = fs.readFileSync('test.mp4');
const test2 = fs.readFileSync('test2.mp4');

const newArr = [test, test2];
// const path = require('path');

// fs.mkdirSync('data', { recursive: true });

// const test = path.join('data', 'test.log');
// fs.openSync(test, 'a');

fs.mkdirSync('data', { recursive: true });

// for (let i = 0; i < newArr.length; i++) {
//     // fs.appendFileSync('data/test.mp4', newArr[i]);
//     console.log(newArr[i]);
// };

fs.appendFileSync('data/test.mp4', newArr[1]);