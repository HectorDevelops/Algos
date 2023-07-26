// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

strs = ["flower", "flow", "flight"];
const longestCommonPrefix = function (strs) {
  // Create for loop to iterate through the strs array
  // Conditional check to determine the length of each string at each index
  // Conditional check if the string in the index is
  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; i < strs[i].length; j++) {
        console.log(strs[i])
    }
  }
};
longestCommonPrefix(strs);
