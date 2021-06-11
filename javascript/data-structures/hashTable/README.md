# hashTable

This is a code challenge that implements a hash table, which is a data structure used for storing key/value pairs. When adding a key/value pair to a hash table, an algorithm is run on the key to calculate the index of an array at which the key/value will be stored. For the purposes of this assignment, the data structure being used at all indices is a Linked List.

## Author: Dar-Ci Calhoun

## Links

- Pull Request [hashtable](https://github.com/dcalhoun286/data-structures-and-algorithms/pull/47)

## Challenge

Implement a Hash Table with the following methods:

1. `add`: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
1. `get`: takes in the key and returns the value from the table.
1. `contains`: takes in the key and returns a boolean, indicating if the key exists in the table already.
1. `hash`: takes in an arbitrary key and returns an index in the collection.

### Structure and Testing

Write tests to prove the following functionality:

1. Adding a key/value to your hash table results in the value being in the data structure
2. Retrieving based on a key returns the value stored
3. Successfully returns null for a key that does not exist in the hash table
4. Successfully handle a collision within the hash table
5. Successfully retrieve a value from a bucket within the hash table that has a collision
6. Successfully hash a key to an in-range value

## Approach & Efficiency

- `add(key, value)` has a max time complexity of `O(n)`. If this more than one key that has the same hash value (even if these keys are unique), they will both be stored within the Linked List located at the index determined by the hash. In order to append a node to a Linked List that already contains nodes, you must traverse the Linked List. This means the time it takes to add a key/value pair to a hash table is dependent on how long the linked list was before that key/value pair is added.
- `get(key)`:
- `contains(key)`:
- `hash(key)`:

## Solution

### Solution Code

- [class HashMap](lib/hashtable.js)

### Whiteboard

![hashtable whiteboard](assets/hashtable.drawio.png)

## Resources and Collaborators

- [Stack Overflow: how to check whether a key exists in a JavaScript object](https://stackoverflow.com/questions/1098040/checking-if-a-key-exists-in-a-javascript-object)
