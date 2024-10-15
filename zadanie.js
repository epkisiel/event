let ticket =
{
    from: "Zamość",
    to: "Lublin",
    price: 50
};

console.log("Z "+ticket.from);
console.log("Do " + ticket.to);
console.log("Cena " + ticket.price);


let person = {};
person.name="E.";
person.surname="P.";

console.log(person.name +" "+person.surname);

let books=[
    {
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        pages: 460
    },
    {
        title: "Programming JavaScript Applications",
        author: "Eric Elliott",
        pages: 254
    },
    {
        title: "Understanding ECMAScript 6",
        author: "Nicholas CDATASection. Zakas",
        pages: 352
    }
];

books.push({ 
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254
    });

console.log("Długość tablicy: "+books.length);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);
console.log(books[3].title);

console.log(" ");

let ksiazki = books.slice(2);
console.log(ksiazki[0].title);
console.log(ksiazki[1].title);

let b = books.shift();
console.log(books.length);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);

console.log(" ");
let suma;
suma=books[0].pages+books[1].pages+books[2].pages;
console.log("Suma wszystkich książek z kolekcji: "+suma);