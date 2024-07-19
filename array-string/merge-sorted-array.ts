function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    let lastIdx: number = m + n - 1
    while (m > 0 && n > 0) {
        if (nums1[m-1] > nums2[n-1]) {
            nums1[lastIdx] = nums1[m-1]
            m--
        } else {
            nums1[lastIdx] = nums2[n-1]
            n--
        }
        lastIdx--
    }

    while (n > 0) {
        nums1[lastIdx] = nums2[n-1]
        n--
        lastIdx--
    } 
    
};

merge([0], 0 , [1], 1)