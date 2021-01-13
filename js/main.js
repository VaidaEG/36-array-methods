import { inventors, people } from './data.js';

console.log('Labas');

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1800's
const eighteen = inventors.filter(function(inventor) {
    if(inventor.year >= 1800 && inventor.year < 1900) {
        return true; // keep it!
    }
});
console.table(eighteen);

// Array.prototype.map()
// 2. Gives us an array of the inventors first and last names

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

// 5. Sort the inventors by years lived

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. Sort exercise
// Sort the people alphabetically by last name

// 8. Reduce exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];