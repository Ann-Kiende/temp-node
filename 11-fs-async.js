const { readFile, writeFile } = require('fs')

console.log('1: start')

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Result for async: ${first}, ${second}`,
      { flag: 'a' },
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('2: done with this task')
      }
    )
  })

  // To clearly show how async works!
  const totalSum = (a, b) => {
    sum = a + b
    return sum
  }

  console.log(`3: done with this task and --- sum: ${totalSum(1, 4)}`)
})

console.log('4: starting the next task')
