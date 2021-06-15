# leftJoin

A code challenge that joins together two hashmaps.

## Author: Dar-Ci Calhoun

## Links

- Pull Request [left-join](https://github.com/dcalhoun286/data-structures-and-algorithms/pull/50)

## Challenge

- Write a function that [LEFT JOINS](https://www.tutorialspoint.com/sql/sql-left-joins.htm) two hashmaps into a single data structure.
- The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
- The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
- Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
- LEFT JOIN means all the value int he first hashmap are returned,and if the values exist in the "right" hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of `NULL` should be appended to the result row.
- Avoid utilizing any of the library methods available to your language.
- Write at least three test assertions for each method that you define.

## Approach & Efficiency

When invoking `leftJoin`, an array is declared, the size of which is equal to the number of unique keys that exist in the left hashmap. This value is obtained by reading the `keys` property of the left hashtable for its length. Upon instantiation of this new array, an empty array will exist at each index. To find all of the keys and their corresponding synonyms as well as antonyms, I iterate over the `keys` property, which is an array. The string found at each index of `keys` is pushed into the inner array of the new array at the same index of the current iteration. To find that key's synonyms (as well as antonyms if any exist in the right hashmap), the key is hashed using the hashmap's `hash` method, as this is the value that corresponds to which index of the hashmap the key's synonyms and antonyms will be found (which will be held in a Linked List). These synonyms followed by antonyms will also be pushed into the new array at the same index of the current iteration. Since a new array is being created containing all of the left hashmap's keys with its corresponding synonyms, along with the found antonyms from the right hashmap, space complexity is `O(n)`. This algorithm will take as long as it takes to iterate over the left hashmap's `keys` array, making its time complexity of `O(n)`.

## Solution

- [Solution code for left-join](lib/left-join.js)
- ![left-join whiteboard](assets/left-join.drawio.png)
