const { readFileSync, writeFileSync } = require('fs')

console.log('start')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, `\n` + second)

writeFileSync('./content/result-sync.txt', `Result: ${first}, ${second}`, {
  flag: 'a',
})

const totalSum = (a, b) => {
  // a = 2
  // b = 3
  sum = a + b
  return sum
}

console.log(`done with this task and --- sum: ${totalSum(1, 4)}`)
console.log('starting the next tast sync')
