const _ = require('lodash')

const bigArray = [1, [2, [3, [4]]]]
const items = _.flattenDeep(bigArray)
console.log(items)
console.log('Hello World')
