# Code Challenge: repeatedWord

A code challenge that finds the first repeated word in a book.

## Author: Dar-Ci Calhoun

## Links

- Pull Request [repeated-word](https://github.com/dcalhoun286/data-structures-and-algorithms/pull/48)

## Challenge

Write a function that accepts a lengthy string parameter. Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

## Approach & Efficiency

This is a standalone function. For it to work properly, I required the `HashMap` class as a module and utilized an instance of this class in the function. Time and space complexity are both `O(n)`: the input string is split into an array, and then the array is iterated over as each element is added to an instance of the Hashmap.

## Solution

- [Solution code for repeated-word](./lib/repeated-word.js)
- ![repeated-word whiteboard](./assets/repeated-word.drawio.png)
