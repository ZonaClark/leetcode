// Trapping rain water
var trap = function(height) {
    let ans = 0, left = 0, right = height.length - 1, leftMax = 0, rightMax = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            height[left] < leftMax ? ans += leftMax - height[left] : leftMax = height[left];
            left += 1;
        }
        else {
            height[right] < rightMax ? ans += rightMax - height[right] : rightMax = height[right];
            right -= 1;
        }
    }
    return ans;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));