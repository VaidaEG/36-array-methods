import { inventors, people, people2, comments } from './data.js';

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1800's
const eighteen = inventors.filter(inventor => (inventor.year >= 1800 && inventor.year < 1900));

console.table(eighteen);

// Array.prototype.map()
// 2. Gives us an array of the inventors first and last names
const fullNames = inventors.map(inventor => inventor.name + ' ' + inventor.last);
console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

// 5. Sort the inventors by years lived
const oldest = inventors.sort(function(a, b) {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 : 1;
});
console.table(oldest);

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));
// it's possible to do like that:
// const links = [...category.querySelectorAll('a')];
const de = links
            .map(link => link.textContent)
            .filter(streetName => streetName.includes('de'));

// 7. Sort exercise
// Sort the people alphabetically by last name
const alpha = people.sort(function(lastOne, nextOne) {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
});
console.log(alpha)

// 8. Reduce exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation = data.reduce(function(obj, item) {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(transportation);