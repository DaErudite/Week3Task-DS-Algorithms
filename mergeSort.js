// Split the given list into two halves (roughly equal halves in case of a list with an odd number of elements).
// Continue dividing the subarrays in the same manner until you are left with only single element arrays.
// Starting with the single element arrays, merge the subarrays so that each merged subarray is sorted.
// Repeat above until it endsup with a single sorted array.

function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Joining the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}

function mergeSort(array) {
    const half = array.length / 2
    
    // Base case or terminating case
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
  }


console.log(mergeSort([234,43,55,63,5,6,235,547])) // yields [5, 6, 43, 55,63, 234, 235, 547]
//console.log(BubbleSort([1,4,2,5,-2,3]))
//console.log(BubbleSort([52,37,63,14,17,8,6,25]))



//Time complexity
//The worst-case time complexity of Merge Sort is O(nlogn), same as that for best case time complexity for Quick Sort. The Merge Sort is known to be one of the fastest sorting algorithms out there.