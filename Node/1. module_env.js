const id = 'bactoria'
const name = 'junoh'

function isOdd(num) {
    if (num % 2) return true;
    else return false;
}

// 다른 파일에서 쓸 수 있도록 허용
module.exports = {
    id,
    name,
    isOdd
}

