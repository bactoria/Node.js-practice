/*선언*/
var A_var = 'A'
let A_let = 'A'
const A_const = 'A'


/*출력*/
console.log(A_var) // 'A'
console.log(A_let) // 'A'
console.log(A_const) // 'A'


/*블록 안에서 선언*/
{
    var B_var = 'B'
    let B_let = 'B'
    const B_const = 'B'
}

/*출력*/
console.log(B_var) // 'B'
console.log(B_let) // not defined
console.log(B_const) // not defined


/*변경*/
A_var = 'a' // 'a'
A_let = 'a' // 'a'
A_const = 'a'  // TypeError :: Assignment to constant variable

/*배열의 원소 변경*/
const array = ['Z', 'b', 'c']
array[0] = 'a'
console.log(array) // ['a', 'b', 'c']

/*객체의 요소 변경*/
const user = {id: 'bactoria', name: '준오'}
user.name = 'junoh'
console.log(user.name) // junoh
