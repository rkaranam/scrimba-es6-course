// Destructuring Objects

const player = {
    name: 'Mahendra Singh Dhoni',
    team: 'India',
    address: {
        city: 'Jharkand',
        country: 'India'
    }
};

// console.log(player.name);
// console.log(player.team);

// console.log(player.address);

// console.table(player);

const {name, address:{country}} = player;
const {team} = player;

console.log(`
    ${name} lives in ${country} and also plays for team ${team}
`);

// Destructuring Arrays

const countries = ['India', 'Israel', 'Japan'];

console.log(countries);

const [ firstName, lastName ] = [ 'Raja Sekhar', 'Karanam' ];

console.log(`Name is ${firstName} ${lastName}`);
