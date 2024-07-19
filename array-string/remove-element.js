function removeElement(nums, val) {
    var k = 0;
    var i = 0;
    while (i < nums.length - 1) {
        if (nums[i] !== val) {
            console.log('nums[i]', nums[i]);
            nums[k] = nums[i];
            k++;
        }
        i++;
    }
    console.log(nums);
    console.log(k);
    return k;
}
;
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
