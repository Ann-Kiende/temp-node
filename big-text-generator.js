const { writeFileSync } = require('fs')
for (i = 0; i < 1000; i++) {
  writeFileSync('./content/big.txt', `Hello World ${i}\n`, {
    flag: 'a',
  })
}
