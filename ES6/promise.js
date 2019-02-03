// ### promise (ES2015)
const promiseObj = new Promise((res, rej) => {
    const a = 1;
    const b = 2;

    if (a == b) {
        res(`success : ${a}, ${b}`); // success - then로 보냄
    } else {
        rej(`fail : ${a}, ${b}`); // fail - catch로 보냄
    }

});

promiseObj
    .then(x => console.log(x))
    .catch(x => console.log(x));
console.log("Done");

/* 결과
* Done
* fail : 1, 2
* */



// ### async, await (ES6)

const func = async () => {
    try {
        const vava = await promiseObj;
        await console.log(vava);
    }
    catch (err) {
        await console.log(err);
    }
   console.log("Done");
}

/* 결과
* fail : 1, 2
* Done
* */
// 동기식처럼 순서가 보장된다. 허나, 에러를 try-catch로 제어해야함. 코드가 지저분해질 수 있음.




// ### async/await (ES2017)
