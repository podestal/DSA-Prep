var reverse = function (l, r, nums) {
    while (l < r) {
        var temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;
        l++;
        r--;
    }
};
function rotate(nums, k) {
    reverse(0, nums.length - 1, nums);
    reverse(0, k - 1, nums);
    reverse(k, nums.length - 1, nums);
    // let l: number = 0
    // let r: number = nums.length - 1
    // while (l < r) {
    //     var temp = nums[l];
    //     nums[l] = nums[r]
    //     nums[r] = temp
    //     l++
    //     r--
    // }
    // l = 0
    // r = k - 1
    // while (l < r) {
    //     var temp = nums[l];
    //     nums[l] = nums[r]
    //     nums[r] = temp
    //     l++
    //     r--
    // }
    // l = k 
    // r = nums.length - 1
    // while (l < r) {
    //     var temp = nums[l];
    //     nums[l] = nums[r]
    //     nums[r] = temp
    //     l++
    //     r--
    // }
    console.log(nums);
}
;
rotate([1, 2, 3, 4, 5, 6, 7], 3);
