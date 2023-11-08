/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    let sum = 0;
    for(let i =0;i<nums.length;i++){
        for(let j =i ;j<nums.length;j++){
            let subArray = nums.slice(i , j+1);
            let str = new Set(subArray);
            let size = str.size;
            let product = size*size;
            sum+= product;
        }
    }
    return sum;

};