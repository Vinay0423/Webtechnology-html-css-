
function searching(arr, targetValue){

    let left=0;
    let right= arr.length-1;

    // console.log(left,right,arr);

    while(left<=right){

        const mid= Math.floor((left+right)/2)

        if(arr[mid]===targetValue){
  return mid
        }
        else if(arr[mid]<targetValue){
left=mid+1
        }else {
            right = mid - 1; // Search in the left half
        }
    }

    console.log(mid);
    return -1;

    
}

let arr= [1,2,3,4,5,6,7,8]

console.log( searching(arr,4));


//    function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);

//         if (arr[mid] === target) {
//             return mid; // Target found, return index
//         } else if (arr[mid] < target) {
//             left = mid + 1; // Search in the right half
//         } else {
//             right = mid - 1; // Search in the left half
//         }
//     }

//     return -1; // Target not found, return -1
// }

// // Example usage:
// const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const target = 7;

// const index = binarySearch(sortedArray, target);
// if (index !== -1) {
//     console.log(`Element found at index ${index}`);
// } else {
//     console.log('Element not found');
// }
