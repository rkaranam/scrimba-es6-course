function addressMaker(city, state) {
    
    // const newAddress = { newCity: city, newState: state };

    const addressObj = { city: city, state: state }; // before object literals

    const newAddressObj = { city, state };

    console.log(addressObj);

    console.log(newAddressObj);

}

addressMaker('Hyderabad', 'Telangana');

// Object literal challenge

function createAddress(address) {

    // const newAddress = {
    //     city: address.city,
    //     state: address.state,
    //     country: 'United States'
    // };

    // console.log(newAddress);

    // using destructuring objects
    const { city, state } = address;

    // using object literals
    const newAddress = {
        city: city,
        state: state,
        country: 'United States'
    };

    console.log(newAddress);

    // using template literals
    console.log(`City is ${newAddress.city} and State is ${newAddress.state}. They belong to ${newAddress.country}.`);

}

createAddress( { city: 'Austin', state: 'Texas' } );