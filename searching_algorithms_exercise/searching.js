function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
  // let j = arr.length - 1;
  // for (let i = 0; i < j; i++){
  //   if (arr[i] === val) {
  //     return i;
  //   }
  //   if (arr[j] === val) {
  //     return j;
  //   }
  //   j--;
  // }
  // return -1;
}

function linearSearchRecursive(arr, val) {
  let idx = arr.length - 1;
  if (idx < 0) { return -1; }
  return arr[idx] === val ? idx : linearSearchRecursive(arr.slice(0, idx), val);
}

function binarySearch(arr, val) {
  arr.sort((a, b) => a - b);
  let mid = Math.floor(arr.length / 2);
  let start = 0;
  let end = arr.length - 1;
  if (!val || arr[start] > val || arr[end] < val) { return -1; }
  while (val !== arr[mid]) {
    mid = Math.floor((start + end) / 2);
    if (val === arr[mid]) { return mid; }
    if (start > end) { return -1; }
    if (val < arr[mid]) {
      end = mid - 1;
    }
    if (val > arr[mid]) {
      start = mid + 1;
    }
  }
  return mid;
}

function binarySearchRecursive(arr, val, start = 0, end = arr.length - 1) {
  arr.sort((a, b) => a - b);
  if (start > end || val < arr[start] || val > arr[end]) { return -1; }
  let mid = Math.floor((start + end) / 2);
  if (val === arr[mid]) { return mid; }
  if (val < arr[mid]) {
    end = mid - 1;
  }
  if (val > arr[mid]) {
    start = mid + 1;
  }
  return binarySearchRecursive(arr, val, start, end);
}
