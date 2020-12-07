const fs = require('fs');


const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')

let result = 0

const xor = (a, b) => (a || b) && !(a && b)

lines.forEach((line) => {
    const [indexes, letter, password] = line.split(' ')

    const sanitizedLetter = letter.replace(':', '')

    const [i1, i2] = indexes.split('-').map((l) => Number.parseInt(l) - 1)

    if (xor(password.charAt(i1) === sanitizedLetter, password.charAt(i2) === sanitizedLetter)) {
        result++
    }

})

console.log(result)