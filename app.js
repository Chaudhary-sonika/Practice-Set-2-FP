// 4. Write an ES6 function that takes an array of objects representing books and returns an array with only the titles of each book.

const books = [{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald'}, {title:'To Kill a Mokingbird', author: 'Harper Lee'}, { title:'1984', author: 'George Orwell'}, { title: 'Pride and Prejudice', author: 'Jane Austen'}];

const getBookTitles = objBook => objBook.map(titleObj=> titleObj.title);
const titles = getBookTitles(books);
// console.log(titles);

// 5. Write an ES6 function which takes out the names of the students whose first letter starts with ‘A’.

// const studentName = ["Ram", "Anjali", "Arpit", "Bhanu Kumar", "Jaya", "Ankit", "shayam"];
// const studentNames = studentName.map()

// 6.Write an ES6 function which filters out the products which have a price greater than 40.

const productData = [
    {prodName: "Dairy Milk", price: 10},
    {prodName: "Dairy Milk Silk", price: 70},
    {prodName: "Five Star", price: 20},
    {prodName: "Mars", price: 50}
];
