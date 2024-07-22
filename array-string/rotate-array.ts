const reverse = (l: number, r:number, nums: number[]): void => {
    while (l < r) {
        var temp = nums[l];
        nums[l] = nums[r]
        nums[r] = temp
        l++
        r--
    }
}

function rotate(nums: number[], k: number): void {
    k = k % nums.length
    reverse(0, nums.length -1, nums)
    reverse(0, k-1, nums)
    reverse(k, nums.length - 1, nums)
};

rotate([1,2,3,4,5,6,7], 3)