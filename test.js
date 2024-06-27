var sortBy = function(arr, fn) {
    return arr.sort((a,b)=>fn(a)-fn(b)  );
};



// Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
// Output: [1, 2, 3, 4, 5]