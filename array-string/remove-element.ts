function removeElement(nums: number[], val: number): number {
    let k: number = 0
    let i: number = 0
    while (i < nums.length) {
        if (nums[i] === val) {
            nums.splice(i, 1)
        } else {
            i++
            k++
        }
    }
    console.log(nums)
    console.log(k)
    
    return k
};

removeElement([0,1,2,2,3,0,4,2], 2)