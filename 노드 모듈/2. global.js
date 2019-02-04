// node 열고 global  쳐보기.

console.log(global)
global.console.log(global)
// (console, process, setTimeout은 global의 요소)


/* ### global은 공유된다. (but, 사용금지) ### */
require ('./2. global_env')
console.log(myName) // junoh

/* ### global.process - global 생략 가능 ### */
console.log(process.version) // v.8.12.0
console.log(process.versions.node) // 8.12.0
console.log(process.versions.v8) // 6.2.414.66
console.log(process.pid) // 6008
console.log(process.ppid) // 9840
console.log(process.uptime()) // 0.297
console.log(process.cwd()) // C:\Users\bactoria\git\Node.js-practice\Node
console.log(process.execPath) // C:\Program Files\nodejs\node.exe

process.exit() // 프로세스 종료


