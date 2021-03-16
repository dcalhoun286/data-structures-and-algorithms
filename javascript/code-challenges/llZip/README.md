# llZip

A code challenge that zips two singly linked lists.

## Author: Dar-Ci Calhoun

## Links

- Pull Request [ll-zip](https://github.com/dcalhoun286/data-structures-and-algorithms/pull/34)

<!-- Short summary or background information -->

## Challenge

Write a function called `zipLists` which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1). You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

I formed the `Node` class constructor and the `LinkedList` class constructor be referencing solution code I came up with in my [linkedList subdirectory](../../data-structures/linkedList). I used the `insert(value)` method from this subdirectory, as well as a modified version of `toString()`. After some problem solving, I landed on a solution that traverses both lists one node at a time for each iteration of a `while` loop. If the two input lists are of the same length, the `while` loop will exit when traversal reaches the end. If the two input lists are of different lengths, the `while` loop will exit when traversal reaches the end of the shorter list, and the remainder of the longer list will be appended according to the pattern. Regardless of how large the difference is in length between the two lists, the function will complete in the same amount of time. For this reason, the solution I have come up with for `zipLists(list1, list2)` has a space/time efficiency of O(n).

## Solution
<!-- Embedded whiteboard image -->
![ll-zip whiteboard]()
-[Solution code for ll-zip](lib/ll-zip.js)

## Collaborators
