    //variables in JS

console.log('tut3');
    

   // var, let, const .....declaration!

var name = 'Rohit';
var channel;        //undefined
var marks = 34;
channel = 'CodeWithHarry';
console.log(name, channel, marks);

// Rules for creating JavaScript Variables
/*
1. Cannot start with numbers
2. Can start with letter, numbers, _ or $
3. Are case sensitive
*/

var city = 'Delhi';
console.log(city);

    //  ....   #const  ....
const ownersName = 'Hari Ram';
// ownersName = 'Harry'; // Cannot do this (error) with #const
console.log(ownersName);
const fruit = 'Orange';

    //  ....   #let   ....
{  
 let city = 'Rampur';   
 city = 'Kolkata';
 console.log(city);
}
console.log(city);


const arr1 = [12,23,12,53, 3];
// arr1.push(45);
console.log(arr1)

/* Most common programming case types:

1. camelCase  
2. kebab-case
3. snake_case 
4. PascalCase 

*/