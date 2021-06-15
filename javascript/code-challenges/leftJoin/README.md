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



## Solution

- [Solution code for left-join](lib/left-join.js)
- ![left-join whiteboard](assets/left-join.drawio.png)
