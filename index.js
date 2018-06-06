module.exports = function arrayIntoObject(arr = []) {
  let o = {}

  arr.forEach((p, i) => {
    if (i % 2 === 1 && arr[i - 1]) {
      o[arr[i - 1]] = p
    }
  })

  return o
}
