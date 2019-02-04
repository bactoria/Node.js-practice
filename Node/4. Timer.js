
/*setTimeout*/
// 2초 후에 실행
const timeout_2s = setTimeout(() => {
    console.log('2초 후에 실행');
}, 2000);

// 4초 후에 실행
const timeout_4s = setTimeout(() => {
    console.log('4초 후에 실행');
}, 4000);

/*setInterval*/
// 1초 마다 실행
const interval_1s = setInterval(() => {
    console.log('1초 마다 실행')
}, 1000);

const asd = setTimeout(() => {
    clearTimeout(timeout_4s);
    clearInterval(interval_1s)
}, 3000)

/* print
1초 마다 실행
2초 후에 실행
1초 마다 실행
*/

/*setImmediate*/
const im = setImmediate(() => console.log('즉시 실행'));
// Q :: const im = console.log('즉시 실행'); 과 다른점
// A :: 위의 경우는 이벤트 루프로 보내기 때문에 비동기 처리가 가능함. 아래는 동기.

// ( setTimeout, setInterval, setImmediate 모두 이벤트 루프로 보냄.)

