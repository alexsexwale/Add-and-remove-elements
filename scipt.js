//// PART 1: Array - Push() /////


// Insert a new element at the back of the array
const classmates = ['Arden', 'Alex', 'Jamy-lee', 'Jordan', 'Joshua'];
classmates.push("Nomvuyiseko");
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
people.push({name: 'Nomvuyiseko', age: 24 });
console.log(people);