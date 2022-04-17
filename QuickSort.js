// Select an element of the array. This element is generally called the pivot. Most often this element is either the first or the last element in the array.
// Then, rearrange the elements of the array so that all the elements to the left of the pivot are smaller than the pivot and all the elements to the right are greater than the pivot. The step is called partitioning. If an element is equal to the pivot, it doesn't matter on which side it goes.
// Repeat this process individually for the left and right side of the pivot, until the array is sorted.

function partition(arr, start, end){
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        // Swapping elements
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        // Moving to next element
        pivotIndex++;
        }
    }
    
    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
}

//Recursive implementation of Quick sort
function QuickSort(arr, start, end) {
    // Base case or terminating case
    if (start >= end) {
        return;
    }
    
    // Returns pivotIndex
    let index = partition(arr, start, end);
    
    // Recursively apply the same logic to the left and right subarrays
    QuickSort(arr, start, index - 1);
    QuickSort(arr, index + 1, end);
}



//DataSet=[234,43,55,63,5,6,235,547]
DataSet=[1,4,2,5,-2,3]
// DataSet=[52,37,63,14,17,8,6,25]


//Test code by calling QuickSort
QuickSort(DataSet, 0, DataSet.length - 1);

console.log(DataSet)// gives the sorted array [ -2, 1, 2, 3, 4, 5 ]





//Time complexity
// Using the common big-O notation, the worst-case time complexity of Quick Sort is O(n2/n-squared). The average case time complexity is O(nlogn).
//The QuickSort algorithm depends on choice of pivot. Choosing a bad pivot (one that is greater than/less than most elements) every time, would give us the worst-case time complexity, O(n2). While repeatedly choosing a pivot that has a roughly equal number of elements that are less than/greater than the pivot would give us a time complexity of O(nlogn).
//However, almost every time QuickSort tends to have O(nlogn) time complexity.





