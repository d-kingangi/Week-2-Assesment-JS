// Given an array and chunk size divide the array into subarrays where each subarray is of length is the chunk size. 

function chunk(array, size) {
    let chunked = []
    let index = 0
  
    while (index < array.length) {
      chunked.push(array.slice(index, index + size))
      index += size
    }
    return chunked
  }
  
  console.log(chunk([1, 2, 3, 4], 2))