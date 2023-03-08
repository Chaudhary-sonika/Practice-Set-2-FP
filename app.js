// 4. Write an ES6 function that takes an array of objects representing books and returns an array with only the titles of each book.

const books = [{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald'}, {title:'To Kill a Mokingbird', author: 'Harper Lee'}, { title:'1984', author: 'George Orwell'}, { title: 'Pride and Prejudice', author: 'Jane Austen'}];

const getBookTitles = objBook => objBook.map(titleObj=> titleObj.title);
const titles = getBookTitles(books);
// console.log(titles);

// 5. Write an ES6 function which takes out the names of the students whose first letter starts with ‘A’.

// const studentName = ["Ram", "Anjali", "Arpit", "Bhanu Kumar", "Jaya", "Ankit", "shayam"];
// const studentNames = studentName.filter(objName => objName.toUpperCase().charAt(0) === 'A');
// console.log(studentNames);

// 6.Write an ES6 function which filters out the products which have a price greater than 40.

const productData = [
    {prodName: "Dairy Milk", price: 10},
    {prodName: "Dairy Milk Silk", price: 70},
    {prodName: "Five Star", price: 20},
    {prodName: "Mars", price: 50}
];
// const getProducts = (arr, objPrice)=> arr.filter((calPrice)=> calPrice.price > objPrice);

// console.log(getProducts(productData, 40));

// 7. Write an ES6 function that takes an array of numbers and returns the first number that is divisible by 7.
    
    const numbers = [1, 2, 3, 21, 14, 7];
    const divisibleBy7 = (element)=> element%7 === 0
    const isDivisibleBy7 = numbers.find(divisibleBy7);
    
    // console.log(isDivisibleBy7);
    
//    8. Write an ES6 function that takes an array of strings and returns the first string that is longer than 8 characters.

const names = ["Mohan", "Anjali", "Geetanjali", "Ankit", "Bhanu Kumar", "Ramakrishnan",  "shayam"];

const isNamesGreaterThan8 = (obj) => obj.find((strObj) =>strObj.length>8 );

// console.log(isNamesGreaterThan8(names));


// 9. Write an ES6 function that takes an array of objects representing students with properties name and grade. Return the first student object that has a grade of "A".

// const students = [
//     {name: 'John', grade: 'B'}, {name: 'Mary', grade: 'A'}, { name: 'Sam', grade: 'C'}, { name: 'Sarah', grade: 'A'}
// ];

// const findStudentWithGradeA = (objStudent) => objStudent.find(gradeA => gradeA.grade === 'A')
// const studentWithGradeA = findStudentWithGradeA(students);
// console.log(studentWithGradeA); 

//10. Write an ES6 function that takes an array of objects representing students with properties name, grade and scholarship. Return the first student object that has a grade of "A" or they are a scholarship student.

// const students = [
//     { name: "John", grade: "B", scholarship: false },
//     { name: "Mary", grade: "B", scholarship: true },
//     { name: "Sam", grade: "A", scholarship: false },
//     { name: "Sarah", grade: "A", scholarship: true },
//   ];
//   const findStudent = (objArray) => objArray.find(findGradeA => findGradeA.grade ==='A' && findGradeA.scholarship === true)
//   const student = findStudent(students);
// console.log(student); 


//11. Write an ES6 function that takes an array of objects representing students with properties name and grade. Return the first student object that has a grade of "B" and they are also a scholarship student.

const students = [
    { name: "John", grade: "B", scholarship: false },
    { name: "Mary", grade: "A", scholarship: true },
    { name: "Sam", grade: "A", scholarship: false },
    { name: "Sarah", grade: "B", scholarship: true },
  ];
  const findStudent = (objArray) => objArray.find(findGradeA => findGradeA.grade ==='B' && findGradeA.scholarship === true)

// const student = findStudent(students);
//  console.log(student); 

//12. Write an ES6 function that takes an array of objects containing Bollywood movie information (title, director, year, rating) and returns an array with only the movie titles that were made before 1990 and has a rating above 8.0. 

const bollywoodMovies = [
    { title: 'Sholay', director: 'Ramesh Sippy', year: 1975, rating: 8.2 },
    { title: 'Amar Akbar Anthony', director: 'Manmohan Desai', year: 1977, rating: 7.6 },
    { title: 'Namak Halaal', director: 'Prakash Mehra', year: 1982, rating: 7.4 },
    { title: 'Mr. India', director: 'Shekhar Kapur', year: 1987, rating: 7.8 },
    { title: 'Qayamat Se Qayamat Tak', director: 'Mansoor Khan', year: 1988, rating: 7.6 },
    { title: 'Parinda', director: 'Vidhu Vinod Chopra', year: 1989, rating: 8.1 },
    { title: 'Dil', director: 'Indra Kumar', year: 1990, rating: 7.8 }
  ];

  const getBestOldBollywoodMovies =(arrayOfObj) => arrayOfObj.filter((getMovie) => getMovie.year < 1990 && getMovie.rating > 8.0);

  const bestOldMovies = getBestOldBollywoodMovies(bollywoodMovies);
//   const {title, director, year, rating} = bestOldMovies;


const title_name = bestOldMovies.map(objArr=> objArr.title);

// var bestTitles = []
// for (i = 0; i < bestOldMovies.length; i++) {
//   bestTitles[i] = bestOldMovies[i]['title'];
// }
console.log(title_name);