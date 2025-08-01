'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
    'pasta',
    'gnocchi',
    'tomatoes',
    'olive oil',
    'garlic',
    'basil',
]);

const mexicanFoods = new Set([
    'tortillas',
    'beans',
    'rice',
    'tomatoes',
    'avocado',
    'garlic',
]);

const books = [
    {
        title: 'Algorithms',
        author: ['Robert Sedgewick', 'Kevin Wayne'],
        publisher: 'Addison-Wesley Professional',
        publicationDate: '2011-03-24',
        edition: 4,
        keywords: [
            'computer science',
            'programming',
            'algorithms',
            'data structures',
            'java',
            'math',
            'software',
            'engineering',
        ],
        pages: 976,
        format: 'hardcover',
        ISBN: '9780321573513',
        language: 'English',
        programmingLanguage: 'Java',
        onlineContent: true,
        thirdParty: {
            goodreads: {
                rating: 4.41,
                ratingsCount: 1733,
                reviewsCount: 63,
                fiveStarRatingCount: 976,
                oneStarRatingCount: 13,
            },
        },
        highlighted: true,
    },
    {
        title: 'Structure and Interpretation of Computer Programs',
        author: [
            'Harold Abelson',
            'Gerald Jay Sussman',
            'Julie Sussman (Contributor)',
        ],
        publisher: 'The MIT Press',
        publicationDate: '2022-04-12',
        edition: 2,
        keywords: [
            'computer science',
            'programming',
            'javascript',
            'software',
            'engineering',
        ],
        pages: 640,
        format: 'paperback',
        ISBN: '9780262543231',
        language: 'English',
        programmingLanguage: 'JavaScript',
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 4.36,
                ratingsCount: 14,
                reviewsCount: 3,
                fiveStarRatingCount: 8,
                oneStarRatingCount: 0,
            },
        },
        highlighted: true,
    },
    {
        title: "Computer Systems: A Programmer's Perspective",
        author: ['Randal E. Bryant', "David Richard O'Hallaron"],
        publisher: 'Prentice Hall',
        publicationDate: '2002-01-01',
        edition: 1,
        keywords: [
            'computer science',
            'computer systems',
            'programming',
            'software',
            'C',
            'engineering',
        ],
        pages: 978,
        format: 'hardcover',
        ISBN: '9780130340740',
        language: 'English',
        programmingLanguage: 'C',
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 1010,
                reviewsCount: 57,
                fiveStarRatingCount: 638,
                oneStarRatingCount: 16,
            },
        },
        highlighted: true,
    },
    {
        title: 'Operating System Concepts',
        author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
        publisher: 'John Wiley & Sons',
        publicationDate: '2004-12-14',
        edition: 10,
        keywords: [
            'computer science',
            'operating systems',
            'programming',
            'software',
            'C',
            'Java',
            'engineering',
        ],
        pages: 921,
        format: 'hardcover',
        ISBN: '9780471694663',
        language: 'English',
        programmingLanguage: 'C, Java',
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 3.9,
                ratingsCount: 2131,
                reviewsCount: 114,
                fiveStarRatingCount: 728,
                oneStarRatingCount: 65,
            },
        },
    },
    {
        title: 'Engineering Mathematics',
        author: ['K.A. Stroud', 'Dexter J. Booth'],
        publisher: 'Palgrave',
        publicationDate: '2007-01-01',
        edition: 14,
        keywords: ['mathematics', 'engineering'],
        pages: 1288,
        format: 'paperback',
        ISBN: '9781403942463',
        language: 'English',
        programmingLanguage: null,
        onlineContent: true,
        thirdParty: {
            goodreads: {
                rating: 4.35,
                ratingsCount: 370,
                reviewsCount: 18,
                fiveStarRatingCount: 211,
                oneStarRatingCount: 6,
            },
        },
        highlighted: true,
    },
    {
        title: 'The Personal MBA: Master the Art of Business',
        author: 'Josh Kaufman',
        publisher: 'Portfolio',
        publicationDate: '2010-12-30',
        keywords: ['business'],
        pages: 416,
        format: 'hardcover',
        ISBN: '9781591843528',
        language: 'English',
        thirdParty: {
            goodreads: {
                rating: 4.11,
                ratingsCount: 40119,
                reviewsCount: 1351,
                fiveStarRatingCount: 18033,
                oneStarRatingCount: 1090,
            },
        },
    },
    {
        title: 'Crafting Interpreters',
        author: 'Robert Nystrom',
        publisher: 'Genever Benning',
        publicationDate: '2021-07-28',
        keywords: [
            'computer science',
            'compilers',
            'engineering',
            'interpreters',
            'software',
            'engineering',
        ],
        pages: 865,
        format: 'paperback',
        ISBN: '9780990582939',
        language: 'English',
        thirdParty: {
            goodreads: {
                rating: 4.7,
                ratingsCount: 253,
                reviewsCount: 23,
                fiveStarRatingCount: 193,
                oneStarRatingCount: 0,
            },
        },
    },
    {
        title: 'Deep Work: Rules for Focused Success in a Distracted World',
        author: 'Cal Newport',
        publisher: 'Grand Central Publishing',
        publicationDate: '2016-01-05',
        edition: 1,
        keywords: ['work', 'focus', 'personal development', 'business'],
        pages: 296,
        format: 'hardcover',
        ISBN: '9781455586691',
        language: 'English',
        thirdParty: {
            goodreads: {
                rating: 4.19,
                ratingsCount: 144584,
                reviewsCount: 11598,
                fiveStarRatingCount: 63405,
                oneStarRatingCount: 1808,
            },
        },
        highlighted: true,
    },
];

// ASSIGNMENTS
// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

// const [, , thirdBook] = books;
// console.log(thirdBook);

// const ratingStars = [63405, 1808];

// const [fiveStarRatings = 1, oneStarRatings = 1, threeStarRatings = 0] =
//     ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

/*

*/

// ASSIGNMENT 2.1
const {
    title: bookTitle,
    author: bookAuthor,
    ISBN: bookISBN,
    edition: bookEdition,
    pages: bookPages,
    language: bookLanguage,
} = books[0];
console.log(
    `The book ${bookTitle} was written by ${bookAuthor[0]}, its ISBN is ${bookISBN}, has ${bookPages} pages and was initially written in ${bookLanguage}`
);

/*

*/
// ASSIGNMENT 2.2
const { keywords: tags, title: bookName } = books[0];
console.log(`The book '${bookName}' has '${tags}' as tags.`);

/*

/*

*/
// ASSIGNMENT 2.3
const { programmingLanguage = 'Unknown', language: bookLang } = books[6];
console.log(
    `Programming language is '${programmingLanguage}' and book's language is '${bookLang}'`
);

/*

*/
// ASSIGNMENT 2.4
let theBookTitle = 'unknown';
let theBookAuthor = 'unknown';
({ title: theBookTitle } = books[0]);
console.log(`${theBookTitle} / ${theBookAuthor}`);

/*

*/

/*

*/

// ASSIGNMENT 3.1
// const bookAuthors = [...books[0].author, ...books[1].author];
// console.log(bookAuthors);

/*


*/

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({
        starterIndex = 1, // default values
        mainIndex = 0,
        address,
        time = '20:00',
    }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(
            `Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`
        );
    },
};

/*

*/

// The spread operator

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr); // if we want to display the array

// console.log(...newArr); // if we want the elements of the array individualy

// const newMenu = [...restaurant.mainMenu, 'Gnochi'];
// console.log(newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // iterables: arrays, strings, maps, sets but not objects
// const str = 'Jonas';
// const letters = [...str, '', 'S.'];
// console.log(...letters);

// real-world example
// const ingredients = [
//     prompt("Let's make pasta! Ingredient 1?"),
//     prompt('Ingredient 2?'),
//     prompt('Ingredient 3?'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = {
//     foundingYear: 1998,
//     ...restaurant,
//     founder: 'Giuseppe',
// };
// console.log(newRestaurant);

// const restaurantCopy = {
//     ...restaurant,
// };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

//

//
//

//////////////////////////////////////////////
// DESTRUCTURING OBJECTS
// restaurant.orderDelivery({
//     time: '23:30',
//     address: 'Via del Sole 21',
//     mainIndex: 2,
//     starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//     name: restaurantName,
//     openingHours: hours,
//     categories: tags,
// } = restaurant;
// console.log(name, hours, tags);

// // default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // nested objects
// const {
//     fri: { open: openOnFriday, close: closeOnFriday },
// } = openingHours;
// console.log(openOnFriday, closeOnFriday);

//////////////////////////////////////////////
// DESTRUCTURING ARRAYS
// Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(`${starter}, ${mainCourse}`);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
