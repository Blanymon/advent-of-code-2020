const fs = require('fs');


const numbers = fs.readFileSync('./input.txt', 'utf-8').split('\n')
    .map(item => Number.parseInt(item))


while (numbers.length > 0) {
    const current = numbers.pop()
    numbers.forEach(number => {
        if (current + number === 2020) {
            console.log(current * number)
            return
        }
    })
}

