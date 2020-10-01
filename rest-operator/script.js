function add(nums) {
    console.log("add function: nums");
    console.log(nums);
    // console.log(arguments); [0:4, 1:5, 2:6, 3:8, 4:12]
}

function addWithRestOperator(...nums) {
    console.log("add function with rest operator: ...nums");
    console.log(nums);
}

add(4, 5, 6, 8, 12);

addWithRestOperator(4, 5, 6, 8, 12);
