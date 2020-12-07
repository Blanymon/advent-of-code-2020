const fs = require('fs');


const numbers = fs.readFileSync('./input.txt', 'utf-8').split('\n')
    .map(item => Number.parseInt(item))

const combinations = numbers.flatMap(
    (v, i) => numbers.slice(i + 1).flatMap(
        (w) => numbers.slice(i + 2)
    )
)

for (const item of combinations) {
    if (item[0] + item[1] + item[2] === 2020) {
        console.log([item[0], item[1], item[2]], item[0] + item[1] + item[2])
        return
    }
}