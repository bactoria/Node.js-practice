// path 모듈 추가
const path = require('path');

console.log(path)
console.log(path.sep) // dir 구분 인자(\)

const myDir = path.format({
    root: 'C:\\',
    dir: 'C:\\Users\\bactoria\\git\\Node.js-practice\\노드 모듈',
    base: '7. path 모듈.js',
    ext: '.js',
    name: '7. path 모듈'
})

console.log(path.parse(__filename))  // == myDir

console.log(path.relative('C:\\Users\\bactoria\\git\\Node.js-practice', 'C:\\')); //A에서 B까지 상대 경로 (..\..\..\..)

// __dirname :: C:\Users\bactoria\git\Node.js-practice\노드 모듈
console.log(path.join(__dirname, '..', '..', '..', '..', '/bactoria,')); // 상대경로 (C:\Users\bactoria)
console.log(path.resolve(__dirname, '..', '..', '/Users')); // 절대경로 (C:\Users)
