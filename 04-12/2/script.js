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
        const value = splittedLine[splittedLine.indexOf(field) + 1]
        condition &= splittedLine.includes(field)
        switch (field) {
            case 'byr': condition &= parseInt(value) >= 1920 && parseInt(value) <= 2002
                break
            case 'iyr': condition &= parseInt(value) >= 2010 && parseInt(value) <= 2020
                break
            case 'eyr': condition &= parseInt(value) >= 2020 && parseInt(value) <= 2030
                break
            case 'hgt':
                if (value.includes('cm')) condition &= parseInt(value.split('cm')[0]) >= 150 && parseInt(value.split('cm')[0]) <= 193
                else if (value.includes('in')) condition &= parseInt(value.split('in')[0]) >= 59 && parseInt(value.split('in')[0]) <= 76
                else condition = false
                break
            case 'hcl': condition &= value.startsWith('#') && value.split('').filter((c) => c.match(/[a-f]|[0-9]/g)).length === 6
                break
            case 'ecl': condition &= ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value)
                break
            case 'pid': condition &= !!(value.length === 9 && parseInt(value))
                break
        }
        i++
    }
    if (condition) result++
})

console.log(result)