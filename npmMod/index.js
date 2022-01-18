const chalk =require('chalk');
var validator=require('validator');

const res=validator.isEmail("ishita@email.com");
console.log(res?chalk.green(res):chalk.res(res));
console.log(chalk.italic.blue.inverse("Ishitaaa"))