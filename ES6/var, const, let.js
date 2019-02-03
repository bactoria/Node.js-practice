var A_var = 'A'
let A_let = 'A'
const A_const = 'A'

console.log(A_var) // 'A'
console.log(A_let) // 'A'
console.log(A_const) // 'A'


{
    var B_var = 'B'
    let B_let = 'B'
    const B_const = 'B'
}

console.log(B_var) // 'B'
console.log(B_let) // not defined
console.log(B_const) // not defined


var C_var = 'C'
C_var = 'c'

let C_let = 'C'
C_let = 'c'

const C_const = 'C'
C_const = 'c'  // TypeError :: Assignment to constant variable



const array = ['Z', 'b', 'c']
array[0] = 'a'
console.log(array) // ['a', 'b', 'c']

const user = {id: 'bactoria', name: '준오'}
user.name = 'junoh'
console.log(user.name) // junoh
