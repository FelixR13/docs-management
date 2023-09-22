import chalk from 'chalk';
import readlineSync from 'readline-sync';
import fs from 'fs';
import startSort from './startSort.js'
const log = console.log;


var stepOne = ['Absender bearbeiten', 'Index anzeigen', 'Sortieren starten'];

var stepOne = readlineSync.keyInSelect(stepOne, 'Was möchtest du tun?') + 1;


switch (stepOne) {
    case 1:
        // Absender liste 
        if (!fs.existsSync('./sender/list.json')) { log(chalk.redBright('Keine Absenderliste angelegt')); break }
        console.log(JSON.parse(fs.readFileSync('./sender/list.json')))
        break;
    case 2:
        // Index anzeigen
        if (!fs.existsSync('./output/index.json')) { log(chalk.redBright('Kein index angelegt')); break }
        console.log(JSON.parse(fs.readFileSync('./output/index.json')))
        break;
    case 3:
        //Programm starten
        startSort();
        break;
}



