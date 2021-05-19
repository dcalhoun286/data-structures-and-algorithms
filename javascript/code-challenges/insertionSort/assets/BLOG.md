# Blog: Insertion Sort

For this assignment, I wrote a blog that documents what the algorithm is doing step-by-step as provided by the pseudocode below:

![pseudocode-insertionSort](./insertion-sort.png)

Let's say you have the following array:

[20, 18, 12, 8, 5, -2]

First pass (i = 1):

- let j = i - 1 .... which means during this pass, j is set to 0
- let temp = arr[i] .... which means during this pass, temp is set to 18

- Now let's run our while loop:
  - While j >= 0 AND temp < arr[j]:
    - First iteration:
      - arr[1] is set to 20
      - j is decremented to -1
  - The while loop exits because j is now less than 0. It does not matter to check the 2nd condition for the while loop to run -- it will not run regardless, because BOTH conditions need to be true in order for the code block in the while loop to run.

- Remember that `temp` variable we created? It holds the value that otherwise would have disappeared when we assigned arr[1] in the while loop. Now we set arr[0] to temp, which is 18.

What our array looks like now:

[18, 20, 12, 8, 5, -2]

Second pass (i = 2):

- let j = i - 1 .... which means during this pass, j is set to 1
- let temp = arr[i] .... which means during this pass, temp is set to 12.

- Now let's run our while loop:
  - While j >= 0 AND temp < arr[j]:
    - **First iteration**:
      - arr[2] is set to 20
      - j is decremented to 0
      - our array looks like this now: [18, 20, 20, 8, 5, -2]
    - **Second iteration**:
      - arr[1] is set to 18
      - j is decremented to -1
      - our array looks like this now: [18, 18, 20, 8, 5, -2]
    - While loop exits because the first condition (j >= 0) is no longer true.

- Lastly, arr[0] is set to `temp`, which is 12.
- Our array after the second pass is complete: [12, 18, 20, 8, 5, -2]

Third pass (i = 3):

- let j = i - 1 .... which means during this pass, j is set to 2
- let temp = arr[i] .... which means during this pass, temp is set to 8.

- Now let's run our while loop:
  - While j >= 0 AND temp < arr[j]:
    - **First iteration**:
      - arr[3] is set to 20
      - j is decremented to 1
      - our array looks like this now: [12, 18, 20, 20, 5, -2]
    - **Second iteration**:
      - arr[2] is set to 18
      - j is decremented to 0
      - our array looks like this now: [12, 18, 18, 20, 5, -2]
    - **Third iteration**:
      - arr[1] is set to 12
      - j is decremented to -1
      - our array looks like this now: [12, 12, 18, 20, 5, -2]
    - While loop exits because the first condition (j >= 0) is no longer true.

- Lastly, arr[0] is set to `temp`, which is 8.
- Our array after the third pass is complete: [8, 12, 18, 20, 5, -2]

Fourth pass (i = 4):

- let j = i - 1 .... which means during this pass, j is set to 3
- let temp = arr[i] .... which means during this pass, temp is set to 5.

- Now let's run our while loop:
  - While j >= 0 AND temp < arr[j]:
    - **First iteration**:
      - arr[4] is set to 20
      - j is decremented to 2
      - our array looks like this now: [8, 12, 18, 20, 20, -2]
    - **Second iteration**:
      - arr[3] is set to 18
      - j is decremented to 1
      - our array looks like this now: [8, 12, 18, 18, 20, -2]
    - **Third iteration**:
      - arr[2] is set to 12
      - j is decremented to 0
      - our array looks ike this now: [8, 12, 12, 18, 20, -2]
    - **Fourth iteration**:
      - arr[1] is set to 8
      - j is decremented to -1
      - our array looks like this now: [8, 8, 12, 18, 20, -2]
    - While loop exits because the first condition (j >= 0) is no longer true.

- Lastly, arr[0] is set to `temp`, which is 5.
- Our array after the fourth pass is complete: [5, 8, 12, 18, 20, -2]

Fifth pass (i = 5):

- let j = i - 1 .... which means during this pass, j is set to 4
- let temp = arr[i] .... which means during this pass, temp is set to -2.

- Now let's run our while loop:
  - While j >= 0 AND temp < arr[j]:
    - **First iteration**:
      - arr[5] is set to 20
      - j is decremented to 3
      - our array looks like this now: [5, 8, 12, 18, 20, 20]
    - **Second iteration**:
      - arr[4] is set to 18
      - j is decremented to 2
      - our array looks like this now: [5, 8, 12, 18, 18, 20]
    - **Third iteration**:
      - arr[3] is set to 12
      - j is decremented to 1
      - our array looks like this now: [5, 8, 12, 12, 18, 20]
    - **Fourth iteration**:
      - arr[2] is set to 8
      - j is decremented to 0
      - our array looks like this now: [5, 8, 8, 12, 18, 20]
    - **Fifth iteration**:
      - arr[1] is set to 5
      - j is decremented to 0
      - our array looks like this now: [5, 5, 8, 12, 18, 20]
    - While loop exits because the first condition (j >= 0) is no longer true.

- Lastly, arr[0] is set to `temp`, which is -2.
- Our array after the fourth pass is complete: [-2, 5, 8, 12, 18, 20]

Sixth pass (i = 6):

**Note**: at this point, we have an index of 6, which is the 7th position in our array (which does not exist ... there are only six elements in our array).

- let j = i - 1 .... which means during this pass, j is set to 5
- let temp = arr[i] .... which means during this pass, temp is set to `undefined`.

- Now let's run our while loop:
  - While j >= 0 AND temp < arr[j]:
    - ... actually, this loop will not run. While the first condition is true, `temp < arr[j]` returns false because `undefined` is not a number.

Our `for` loop finally exits, since i is now larger than the length of our input array.

## Approach & Efficiency

The approach of the pseudocode provided uses two nested loops. The implication of this: the outer loop essentially will not move on to the next iteration until the inner loop has finished all of its iterations. For this reason, time efficiency is `O(n^2)`. Since the array is being modified in place, space efficiency is `O(1)`.
