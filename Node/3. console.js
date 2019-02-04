// ### Directory

const obj = {
    id: 1,
    alphabet: {a: 'a', b: 'b'}
}

console.dir(obj, {colors : true, depth : 0}); // { id: 1, alphabet: [Object] }
console.dir(obj, {colors : true, depth : 1}); // { id: 1, alphabet: { a: 'a', b: 'b' } }


// ### Logger

console.log("This is log")
console.error("This is error")
console.trace("This is trace")


// ### Time
const time1 = "타임체크1"
const time2 = "타임체크2"

console.time(time1);
console.time(time2);

console.timeEnd(time1); // 타임체크1: 0.097ms
console.timeEnd(time2); // 타임체크2: 0.143ms
