import fs from 'fs';
import readlineSync from 'readline-sync';

export default function () {
    let senderList = JSON.parse(fs.readFileSync('./sender/list.json', 'utf8'));
    console.log(senderList);
    var senderMenu = ['Absender hinzufügen', 'Absender löschen', 'Absender aktualisien'];
    var senderMenu = readlineSync.keyInSelect(senderMenu, 'Was möchtest du tun?') + 1;


    switch (senderMenu) {
        case 1:
            var newSender = readlineSync.question('Name oder Bezeichnung des Absenders\n');
            senderList[newSender] = newSender;
            break;
        case 2:
            var senderName = readlineSync.question('Name des Absenders der gelöscht werden soll\n');
            delete senderList[senderName];
            break;
        case 3:
            var senderName = readlineSync.question('Name des Absenders der aktualisiert werden soll\n');
            senderList[senderName] = readlineSync.question('Neuer Name des Absenders\n');
            break;
    }
    fs.writeFileSync('./sender/list.json', JSON.stringify(senderList));
}