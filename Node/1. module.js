// 기존
const a = require('./1. module_env');
console.log(a.id);
console.log(a.name);

// ES6
const {id, name} = require('./1. module_env');
console.log(id);
console.log(name);


//함수 이름은 변경할 수 있음.
const isOdd= require('./1. module_env2');
console.log(isOdd(8));
