/*
P:

'Bubble Sort' is one of the simplest sorting algorithms available. Although it is not an efficient algorithm, it is an excellent exercise for student developers. In this exercise, you will write a function that sorts an array using the bubble sort algorithm.

A bubble sort works by making multiple passes (iterations) through an array. On each pass, the two values of each pair of consecutive elements are compared. If the first value is greater than the second, the two elements are swapped. This process is repeated until a complete pass is made without performing any swaps — at which point the array is completely sorted.

					
6 	2 	7 	1 	4 	Start: compare 6 > 2? Yes
2 	6 	7 	1 	4 	Swap
2 	6 	7 	1 	4 	6 > 7? No (no swap)
2 	6 	7 	1 	4 	7 > 1? Yes
2 	6 	1 	7 	4 	Swap
2 	6 	1 	7 	4 	7 > 4? Yes
2 	6 	1 	4 	7 	Swap
					
2 	6 	1 	4 	7 	2 > 6? No
2 	6 	1 	4 	7 	6 > 1? Yes
2 	1 	6 	4 	7 	Swap
2 	1 	6 	4 	7 	6 > 4? Yes
2 	1 	4 	6 	7 	Swap
2 	1 	4 	6 	7 	6 > 7? No
					
2 	1 	4 	6 	7 	2 > 1? Yes
1 	2 	4 	6 	7 	Swap
1 	2 	4 	6 	7 	2 > 4? No
1 	2 	4 	6 	7 	4 > 6? No
1 	2 	4 	6 	7 	6 > 7? No
					
1 	2 	4 	6 	7 	1 > 2? No
1 	2 	4 	6 	7 	2 > 4? No
1 	2 	4 	6 	7 	4 > 6? No
1 	2 	4 	6 	7 	6 > 7? No
1 	2 	4 	6 	7 	No swaps; all done; sorted

We can stop iterating the first time we make a pass through the array without making any swaps because this means that the entire array is sorted.

For further information — including pseudo-code that demonstrates the algorithm, as well as a minor optimization technique — see the Bubble Sort Wikipedia page.

Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements.

E:

D:
  Input = ary
  Output = mutated ary

A:
   - set a flag variable to false for if a swap was made
   - DO... WHILE flag = true
   - ITERATE through the array. 
    - IF an element is greater than the element at the index next to it
    - THEN sortedArray = slice of sorted array up to element + two elements switched + end of ary
   -
*/

const array1 = [5, 3];
console.log(bubbleSort(array1));
console.log(array1); // [3, 5]

const array2 = [6, 2, 7, 1, 4];
console.log(bubbleSort(array2));
console.log(array2); // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
console.log(bubbleSort(array3));
console.log(array3); // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

function bubbleSort(ary) {
  let flag;
  do {
    flag =false;
    for (let i = 0; i < ary.length; i++) {
        if (ary[i+1] < ary[i]) {
          ary.splice(i, 2, ary[i + 1], ary[i]);
          flag = true
        }
    }
  } while (flag);
  return ary;
}
