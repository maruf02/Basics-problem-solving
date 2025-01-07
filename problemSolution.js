// 1. Task: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender.Write a function to filter out all females and then map
//  the remaining people to an array of names.Print the final result.


const people = [
    { name: 'John', age: 25, gender: 'male' },
    { name: 'Jane', age: 30, gender: 'female' },
    { name: 'Sam', age: 22, gender: 'male' },
    { name: 'Sara', age: 28, gender: 'female' },
];


const maleNames = people
    .filter(person => person.gender === 'female')
    .map(person => person.name);


console.log(maleNames);



// 2. Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year.Write a function that takes the array and returns a new array with only the book titles.Print the result.


const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
];


const getBookTitles = (bookArray) => {
    return bookArray.map(book => book.title);
};


const titles = getBookTitles(books);
console.log(titles);


// 3. Task: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number.Compose these functions to create a new function
//     that squares a number, doubles the result, and then adds 5.

const square = (num) => num * num;
const double = (num) => num * 2;
const addFive = (num) => num + 5;


const composedFunction = (num) => addFive(double(square(num)));


const result = composedFunction(3);
console.log(result);



// 4. Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year.Write a function
//     to sort the array of cars by the year of manufacture in ascending order.Print the sorted array.

const cars = [
    { make: 'Toyota', model: 'Corolla', year: 2015 },
    { make: 'Honda', model: 'Civic', year: 2018 },
    { make: 'Ford', model: 'Mustang', year: 2012 },
    { make: 'Chevrolet', model: 'Camaro', year: 2017 },
];


const sortCarsByYear = (carArray) => {
    return carArray.sort((a, b) => a.year - b.year);
};

const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);



// 6. Task: Array Reduction
// Create an array of numbers.Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const sumEvenNumbers = (numArray) => {
    return numArray.reduce((sum, num) => {
        if (num % 2 === 0) {
            return sum + num;
        }
        return sum;
    }, 0);
};


const result2 = sumEvenNumbers(numbers);
console.log(result2);