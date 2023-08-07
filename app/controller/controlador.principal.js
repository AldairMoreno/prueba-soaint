const mergeAndSortArrays = async(arr1, arr2) =>{
    const merged = arr1.concat(arr2); // Merge los dos arrays
    const uniqueArray = Array.from(new Set(merged)); // Elimina los valores duplicados
    const sortedArray = uniqueArray.sort((a, b) => a - b); // Ordena el array resultante

    return sortedArray;
}

// const array1 = [1,2,3];
// const array2 = [3, 4, 5];
const array1 = [-10,22,333,42];
const array2 = [-11,-10,5,22,41,42,333];
const mergedAndSortedArray = mergeAndSortArrays(array1, array2);
console.log(mergedAndSortedArray); 