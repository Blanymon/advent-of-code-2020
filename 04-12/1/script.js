const fs = require('fs');

const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n\n')

let result = 0

const toCheck = [
    'byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'
]

lines.forEach((line) => {

    const splittedLine = line.split(/[\s:\n]+/)
    let condition = true
    let i = 0
    while (condition && i < toCheck.length) {
        const field = toCheck[i]
        condition &= splittedLine.includes(field)
        i++
    }

    if (condition) result++
})

console.log(result)