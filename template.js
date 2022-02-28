let fname = 'Cristian';
let lname = 'Ronaldo';
let age = prompt("Masukan umur Cristian Ronaldo!");

// Cara lama
// let result = fname + ' ' + lname + 'is' + age + 'years old';
// alert(result);

// Memakai tempalate strings
let result = `${fname} ${lname} is ${age} years old`;
alert(result);