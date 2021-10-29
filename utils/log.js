const chalk = require('chalk');
module.exports = function(data, option) {
	if (option == 0) return console.log(chalk.green('[ ✔ ] »  ') + data);
	if (option == 1) return console.log(chalk.green('[ ❕ ] » ') + data);
	if (option == -1) return console.log(chalk.yellow('[ ⚠ ] » ') + data);
	if (option == 2) return console.log(chalk.yellow('[ ☠ ] » ') + data);
	if (option == undefined) return console.log(chalk.yellow('[ 💖 ] » ') + data);
	else return console.log(chalk.green(`${option} » `) + data);
}