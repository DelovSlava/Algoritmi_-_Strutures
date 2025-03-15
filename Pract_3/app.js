function longestIncreasingSubsequenceDPLength(arr) {
    let n = arr.length;
    if (n === 0) return 0;

    let D = new Array(n).fill(1); 

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                D[i] = Math.max(D[i], D[j] + 1);
            }
        }
    }

    return Math.max(...D); 
}


function longestIncreasingSubsequence(arr) {
    let n = arr.length;
    if (n === 0) return [];

    let D = new Array(n).fill(1);
    let prev = new Array(n).fill(-1); 

    let maxLength = 1, maxIndex = 0;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i] && D[j] + 1 > D[i]) {
                D[i] = D[j] + 1;
                prev[i] = j;
            }
        }
        if (D[i] > maxLength) {
            maxLength = D[i];
            maxIndex = i;
        }
    }

    let lis = [];
    while (maxIndex !== -1) {
        lis.push(arr[maxIndex]);
        maxIndex = prev[maxIndex];
    }

    return lis.reverse();
}

let arr = [10, 22, 9, 43, 99, 33, 21, 50, 41, 60, 80];

console.log(longestIncreasingSubsequenceDPLength(arr))

console.log(longestIncreasingSubsequence(arr));
// Очікуємий результат: [10, 22, 33, 50, 60, 80]
