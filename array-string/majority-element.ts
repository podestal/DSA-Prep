function majorityElement(nums: number[]): number {
    let g: number = nums[0]
    let count: number = 1
    
    for (let i: number = 1; i < nums.length; i++) {

        console.log(g);
        console.log(count);
        
        
        if( count === 0) {
            g = nums[i]
        }
        if (nums[i] === g) {
            count++
        } else {
            count--
        }

    }
    console.log('G',g)
    
    return g
};

majorityElement([2,2,1,1,1,2,2])