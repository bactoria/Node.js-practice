// promise (ES2015)
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
console.log("Done"); //위의 로그보다 먼저 찍힘.


// async/await (ES6)
// 장점 : 순서 보장
// 단점 : try-catch 남발

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

func()


// async/await (ES2017)
