function majorityElement(nums) {
    var g = nums[0];
    var count = 1;
    for (var i = 1; i < nums.length; i++) {
        console.log(g);
        console.log(count);
        if (count === 0) {
            g = nums[i];
        }
        if (nums[i] === g) {
            count++;
        }
        else {
            count--;
        }
    }
    console.log('G', g);
    return g;
}
;
majorityElement([2, 2, 1, 1, 1, 2, 2]);
