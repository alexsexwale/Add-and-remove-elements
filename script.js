//// PART 3: Array - Splice() to add an element /////


// Splice can be used to add elements in the array

// Insert a new element at a specific index of the array
const classmates = ['Arden', 'Alex', 'Jamy-lee', 'Jordan', 'Joshua'];
// We are adding a new element at index 2, which will make it the 3rd element in the array. 
classmates.splice(2,0,"Nomvuyiseko");
console.log(classmates);

// We are adding a new element at index 4, which will make it the 5th element in the array. 
classmates.splice(4,0,"Reese");
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
people.splice(2,0,{name: 'Nomvuyiseko', age: 24 });
console.log(people);

people.splice(4,0,{name: 'Reese', age: 24 });
console.log(people);