function removeDuplicatesII(nums) {
    var k = 1;
    var i = 0;
    var pair = false;
    while (i < nums.length) {
        var current = nums[i];
        var next = nums[i + 1];
        if (next === undefined) {
            console.log(nums);
            console.log(k);
            return k;
        }
        if (current === next && pair === false) {
            pair = true;
            nums[k] = nums[i + 1];
            k++;
        }
        if (next > current) {
            pair = false;
            nums[k] = nums[i + 1];
            k++;
        }
        i++;
    }
    return k;
}
;
removeDuplicatesII([0, 0, 1, 1, 1, 1, 2, 3, 3]);
