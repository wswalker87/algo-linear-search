function linearSearch(searchTerm, arr) {
  for (let item of arr) {
    if (item === searchTerm) {
      return arr.indexOf(item)
    } 
  }
  
  return undefined;
}

function globalLinearSearch(searchTerm, arr) {
  let globalArray = []
  let index = 0
  for (let item of arr) {
    if (item === searchTerm) {
      console.log(searchTerm)
      globalArray.push(index)
      index += 1
    } else {
      index += 1
    }
  }
  
  return globalArray;
}

console.log(globalLinearSearch("a", "bananas".split(""))) // ["b", "a", "n", "a", "n", "a", "s"]

module.exports = { linearSearch, globalLinearSearch };
