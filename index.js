var Promise = require('bluebird')

// Run a promise callback function for each array element, and if result is not false|null
// return that result.
// if all cases are false, then result will be false.
function PromiseFirstOk (array, f) {
    if (arr.length === 0) {
      return false
    }
    return f(arr[0]).then(res => {
      return res || PromiseFirstOk(arr.slice(1, arr.length), f)
    })
}

// ------------------------------------------------------ //

// test data
const f = (arg) => Promise.resolve(arg == 5 ? arg : false)
const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// run the test!
PromiseFirstOk(arr, f).then(result => {
  console.log(result)
})
