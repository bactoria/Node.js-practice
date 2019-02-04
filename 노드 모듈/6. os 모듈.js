// 운영체제와 관련된 모듈
const os = require('os');

console.log(os.cpus()) // cpu 정보
console.log(os.cpus().length) // cpu 코어 개수
console.log(os.freemem()) // 사용 가능한 메모리 (3880394752)
console.log(os.totalmem()) // 총 메모리 (8491282432)
console.log(os.uptime()) // os가 켜진 시간 (16014.2011302)
console.log(os.release()) // os 버젼 (10.0.17134)
console.log(os.hostname()) // os 이름 (DESKTOP-9KFQ735)
console.log(os.homedir()) // 홈 경로 (C:\Users\bactoria)



