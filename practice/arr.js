function removeDuplicates(arr) {
  return [...new Set(arr)];
}

const nums = [1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums)); // Output: [1, 2, 3, 4]