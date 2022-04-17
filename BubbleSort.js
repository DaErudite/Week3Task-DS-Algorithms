function BubbleSort(originalArray) {
    //length of given array denoted as n
    let n = originalArray.length;
    
    // iterate through the array n times with a for loop, where n is the length of the array. For each iteration, we "bubble up" an element to its correct place. This is done through another for loop that compares the element to its adjacent one, switching them if need be
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            
            if(originalArray[j] > originalArray[j+1]){
                let t = originalArray[j];
                originalArray[j] = originalArray[j+1];
                originalArray[j+1] = t;
            }
        }
    }
    return originalArray;
}


//Test code using sample data and calling BubbleSort

//DataSet=[234,43,55,63,5,6,235,547]
//DataSet=[1,4,2,5,-2,3]
DataSet=[52,37,63,14,17,8,6,25] // Dataset used


console.log(BubbleSort(DataSet)) //returns sorted array [6,  8, 14, 17,  25, 37, 52, 63]




//Time complexity
//Considering the given array contains n elements, Bubble sort performs O(n), multiplied by n(n iterations) giving a total running time of O(n2/n-squared)- at worst and average case.
//Compared to QuickSort and MergeSort with average time of O(nlogn), this shows that BubbleSort is a horrible sorting algorithm for sorting.