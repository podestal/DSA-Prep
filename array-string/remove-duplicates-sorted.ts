// function removeDuplicates(nums: number[]): number {
//     const duplicates: object = {}
//     let i: number = 0
//     let k: number = 0
//     while (i < nums.length) {
//         if (duplicates[nums[i]] !== undefined) {
//             nums.splice(i, 1)

//         } else {
//             duplicates[nums[i]] = nums[i]
//             k++
//             i++
//         }
//     }
//     return k
// };

// removeDuplicates([0,0,1,1,1,2,2,3,3,4])

function removeDuplicates(nums: number[]): number {
    let k: number = 1
    let i: number = 0
    while (i < nums.length) {
        if (nums[i+1] === undefined) {
    
    
            console.log(nums)
            
            return k
        }
        if (nums[i] != nums[i + 1]){
            nums[k] = nums[i+1]
            k++
        }
        i++
    }    
    return k
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4])