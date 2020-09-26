const testContainer = document.getElementById('test-container');

const first_name = 'Raja Sekhar';
const last_name = 'Karanam';

// before es6
// const full_name = first_name + " " + last_name;

const full_name = `Hi everyone, I am ${first_name} ${last_name}`;

console.log(full_name);

console.log(first_name + '\n' + last_name);

testContainer.innerText = `
    ${first_name}
    ${last_name}
`;
