var lodash=require('lodash')
const items =[1,[2,[3,[4,[5]]]]]

let lodashItems=lodash.flattenDeep(items);
console.log(lodashItems)
