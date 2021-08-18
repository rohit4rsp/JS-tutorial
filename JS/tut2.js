console.time('your code took');   //time start
console.log('hello console');
console.log([33,44,55,66]);     //array
// console.table([33,44,55,66]);    //table
console.log({name: 'Rohit', marks:'45'}); //object
console.table({name: 'Rohit', marks:'45'});
console.warn('this is a warning');
// console.clear();
// automatically assumes semi-colon
console.timeEnd('your code took')   //time end
console.assert(500<120, 'this is not possible')  //assertion