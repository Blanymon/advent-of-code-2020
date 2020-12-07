const fs = require('fs');

const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')

let result = 0
let index = 0

for (let i = 1; i < lines.length; i++) {

    const line = lines[i].split('')

    index += 3
    index %= line.length

    if (line[index] === '#') {
        result++
    }

}

console.log(result)