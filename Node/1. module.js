// 기존
const a = require('./module_env');
console.log(a.id);
console.log(a.name);

// ES6
const {id, name} = require('./module_env');
console.log(id);
console.log(name);



//export가 함수1개라서 함수이름은 변경할 수 있음.
const isOdddddd = require('./1. module_env2');
console.log(isOdddddd(8));

