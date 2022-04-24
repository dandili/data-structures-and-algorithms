/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 
 Time Complexity: O(N)
 Space Complexity: O(N)
 
 */
var twoSum = function(nums, target) {
    var map = {};
    for (let index = 0 ; index < nums.length; index++) {
        var value = nums[index];
        var complement = target - value;
        if (map[complement] !== undefined) {
            return [map[complement], index]
        } else {
            map[value] = index;
        }
    }
};
