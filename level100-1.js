const unsortedList = [12,11,12,21,41,43,21]

// this removeDuplicate function have O(n) complexity
// funtion to remove dulicates from an unsorted list 
function removeDuplicate(list) {
    const result = [];
    const map = {};

    // loop though the unsorted list 
    for (let i = 0; i < list.length; i ++) {
        //if the unsorted list value aready exist in the map object' key, it return true and continuing iteration
        if(map[list[i]]) {
            continue;
        
            // else if the value doesn't exist in the map object's key
        } else {
            // the value get pushed into the result array
            result.push(list[i]);
            // set the value in map's key with the value true. 
            map[list[i]] = true;
        }
    }
    return result;
}

removeDuplicate(unsortedList);