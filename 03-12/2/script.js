const fs = require('fs');

const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')

const runDown = (right, down) => {
    let result = 0
    let index = 0

    for (let i = down; i < lines.length; i += down) {

        const line = lines[i].split('')

        index += right
        index %= line.length

        if (line[index] === '#') {
            result++
        }

    }

    return result
}

console.log(
    runDown(1, 1) *
    runDown(3, 1) *
    runDown(5, 1) *
    runDown(7, 1) *
    runDown(1, 2)
)