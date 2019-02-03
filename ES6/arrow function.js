function add1(x, y) {return x + y;}
const add2 = (x, y) => {return x + y;}
const add3 = (x, y) => x + y;



const user1 = {
    name: 'junoh',
    asd: ['a', 'b', 'c'],
    getInfo() {
        this.asd.forEach(function (alphabet) {
            console.log(this.name, alphabet) // this.name : undefined
        })
    }
}

const user2 = {
    name: 'junoh',
    asd: ['a', 'b', 'c'],
    getInfo() {
        this.asd.forEach(alphabet => console.log(this.name, alphabet)) // this.name : junoh
    }
}
