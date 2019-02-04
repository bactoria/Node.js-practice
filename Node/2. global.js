console.log(global) // global.console.log(global) 와 같음.

console.log(global.process.version) // v.8.12.0
console.log(global.process.versions.node) // 8.12.0
console.log(global.process.versions.v8) // 6.2.414.66
console.log(global.process.pid) // 6008
console.log(global.process.ppid) // 9840


// ### global은 공유한다. (but, 사용금지)
require ('./2. global_env')
console.log(global.myName) // junoh
