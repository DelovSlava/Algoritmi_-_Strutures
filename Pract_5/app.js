  function generateArray(size, min = 0, max = 50) {
    const arr = [];
    for (let i = 0; i < size; i++) {
      arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
  }

  function isOdd(n) {
    return n % 2 !== 0;
  }

  function selectionSortDescending(arr) {
    const oddNumbers = [];
    const oddIndices = [];

    for (let i = 0; i < arr.length; i++) {
        if (isOdd(arr[i])) {
          oddNumbers.push(arr[i]);
          oddIndices.push(i);
        }
      }

    for (let i = 0; i < oddNumbers.length - 1; i++) {
        let maxIndex = i;

        for (let j = i + 1; j < oddNumbers.length; j++) {
            if (oddNumbers[j] > oddNumbers[maxIndex]) {
            maxIndex = j;
            }
        }

        // заміна місцями
        let temp = oddNumbers[i];
        oddNumbers[i] = oddNumbers[maxIndex];
        oddNumbers[maxIndex] = temp;
    }

    
    
    // вставка за індексами відсортованого підмасиву в масив
    for (let i = 0; i < oddIndices.length; i++) {
        arr[oddIndices[i]] = oddNumbers[i];
    }

    return arr;
}

// Тест
const N = 26;
let array = generateArray(N);
console.log(" Початковий масив: ", array);

const sortedArray = selectionSortDescending(array); 
console.log("Масив після сортування непарних елементів за спаданням: ",sortedArray);