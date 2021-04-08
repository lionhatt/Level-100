//merge the sorted value into a new array
function merge(left, right) {
    let arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return [...arr, ...left, ...right]
}

//create mergeSort function of an array to ensure O(nlog(n)) complexity
function mergeSort(arr) {
    const half = arr.length / 2;

    if (arr.length < 2) {
        return arr
    }

    const left = arr.splice(0, half)
    return merge(mergeSort(left), mergeSort(arr))

};

//this permutation check function have O(nlog(n)) complexity
function permutationCheck(str1, str2) {

    // if lengths of both string are not the same, they con't be permutation
    if (str1.length != str2.length) {
        return false;
    } else {
        let arr1 = str1.split('');
        let arr2 = str2.split('');

        //merge sort both strings
        let arrA = mergeSort(arr1);
        let arrB = mergeSort(arr2);

        //compare sorted stings
        for (let i = 0; i < str1.length; i++)
            if (arrA[i] != arrB[i]) {
                return false;
            }
    }
    return true
}

//test case
let strA = 'sorted';
let strB = 'detros';

console.log(permutationCheck(strA, strB));
