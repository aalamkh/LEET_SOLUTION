function productExceptSelf(nums) {
    const n = nums.length; 
    const result = []; 

    // Calculate the product of all elements to the left of each element.
    let leftProduct = 1; 
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // Calculate the product of all elements to the  right of each element and multiply with the existing result.
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return result;
}
