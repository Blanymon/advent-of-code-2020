const fs = require('fs');


const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')

let result = 0

lines.forEach((line) => {
    const [limits, letter, password] = line.split(' ')

    const sanitizedLetter = letter.replace(':', '')

    const [infLimit, supLimit] = limits.split('-').map((l) => Number.parseInt(l))

    const regex = new RegExp(`${sanitizedLetter}`, "g")
    const numberOccurences = password.match(regex)?.length

    if (numberOccurences >= infLimit && numberOccurences <= supLimit) {
        result++
    }

})

console.log(result)