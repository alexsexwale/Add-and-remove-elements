//// PART 2: Array - Unshift() /////


// Insert a new element at the front of the array
const classmates = ['Arden', 'Alex', 'Jamy-lee', 'Jordan', 'Joshua'];
classmates.unshift("Nomvuyiseko");
console.log(classmates);

// Insert a new object element at the back of the array
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
    },
    {
        name: 'Jamy-lee',
        age: 27
    }, 
];
people.unshift({name: 'Nomvuyiseko', age: 24 });
console.log(people);