let incomes = [ 45000, 34770, 22355 ];

let total = 0;

for ( const income of incomes ) {
    console.log(income);
    total += income;
}

console.log(`Total income is ${total}`);

const iplTeams = [
    "Chennai Super Kings",
    "Mumbai Indians",
    "Delhi Chargers",
    "Sun Risers Hyderabad"
];

for (const team of iplTeams) {
    console.log(team);
}

const course = "Amazon Web Services";

for (const letter of course) {
    console.log(letter);
}

// challenge

// Using the For of loop, iterate through array and
// print into the console, a message like:
// Tom lives in Lisbon

const students = [
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris" },
    { name: "Kate", city: "Sydney" }
];

for ( const student of students ) {
    
    // console.log(`${student.name} lives in ${student.city}`);

    // object destructuring
    const { name, city } = student;

    // template literals
    console.log(`${name} lives in ${city}`);

}