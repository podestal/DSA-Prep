function removeDuplicatesII(nums: number[]): number {
    let k: number = 1
    let i: number = 0
    let pair: boolean = false

    while (i < nums.length) {
        let current: number = nums[i]
        let next: number = nums[i+1]

        if (next === undefined) {
            return k
        }
        
        if (current === next && pair === false) {
            pair = true
            nums[k] = nums[i+1]
            k++
        } 
        if (next > current) {
            pair = false
            nums[k] = nums[i+1]
            k++
        }
        i++
    }
    return k
};

removeDuplicatesII([0,0,1,1,1,1,2,3,3])
