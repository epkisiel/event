let event=
    {
        title: "Koncert zespołu X",
        date: "2024.06.15",
        location: "Warszawa"
    };
console.log("Tytuł wydarzenia: "+event.title);
console.log("Data wydarzenia: "+event.date);
console.log("Miejsce wydarzenia: "+event.location);

console.log("");

let participant={};
participant.name="E";
participant.email="email";
console.log("Imię: "+participant.name);
console.log("Email: "+participant.email);

let wydarzenia=[
    {
        title: "Koncert zespołu Y",
        date: "2024-07-20",
        location: "Kraków"
    },
    {
        title: "Festifal Filmowy",
        date: "2024-08-05",
        location: "Gdańsk"
    },
    {
        title: "Wystawa sztuki",
        date: "2024-09-10",
        location: "Wrocław"
    }
];

let newevent={
    title: "Seminarium o JavaScript",
    date: "2024-10-15",
    location: "Łódź"
};

wydarzenia.push(newevent);
console.log("Długość tablicy: "+wydarzenia.length);

let copiedevents= wydarzenia.slice(-2);

console.log("");

wydarzenia.shift();
console.log("Długość tablicy: "+wydarzenia.length);
console.log(wydarzenia[0].title);
console.log(wydarzenia[1].title);
console.log(wydarzenia[2].title);

console.log("");

for (i=0; i<3; i++)
{
    console.log(wydarzenia[i].date);
}