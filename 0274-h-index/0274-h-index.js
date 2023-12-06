var hIndex = function(citations) {
    citations.sort((a, b) => b - a); // Sort the citations in descending order.
    let h = 0;
    
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            h = i + 1; // Update the H-Index if the condition is  met.
        } else {  
            break; // Stop if the condition is no longer met because of the descending sort.
        }
    }
    
    return h;
};
