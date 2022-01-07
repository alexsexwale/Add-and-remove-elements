//// PART 4: Array - Splice() to remove elements /////

// Splice can be used to remove elements in the array

// splice(index position of where we want to start, number of elements we want to remove)

// Insert a new element at a specific index of the array
const classmates = ['Arden', 'Alex', 'Jamy-lee', 'Jordan', 'Joshua'];
// We are removing 1 element starting from index 0.
// classmates.splice(0,1);
// console.log(classmates);

// We are removing 2 elements from index 2
classmates.splice(2,2);
console.log(classmates);

// Insert a new object element at a specific index of the array
let people = [
    {
        name: 'Arden',
        age: 24
    },
    {
        name: 'Alex',
        age: 28
    }, 
    {
        name: 'Jamy-lee',
        age: 25
    }, 
    {
        name: 'Jordan',
        age: 20
    },
    {
        name: 'Joshua',
        age: 23
    }
];
people.splice(2,1);
console.log(people);