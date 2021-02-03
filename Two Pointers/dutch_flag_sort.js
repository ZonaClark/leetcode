// Input: [1, 0, 2, 1, 0]
// Input: [0, 1, 2, 1, 0]
// Input: [0, 1, 0, 1, 2]
function dutch_flag_sort(arr) {
  let low = 0, i = 0, high = arr.length - 1
  while (i <= high) {
    if (arr[i] == 0) {
      [arr[low], arr[i]] = [arr[i], arr[low]]
      low++
      i++
    } else if (arr[i] == 1) {
      i++
    } else {
      [arr[high], arr[i]] = [arr[i], arr[high]]
      high--
    }
  }
}