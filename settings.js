import config from 'config';
import fs from 'fs';
import readlineSync from 'readline-sync';

export default function () {
    console.log(config.get('Settings'));
    var settingsMenu = ['edit input-dir', 'edit output-dir', 'edit language', 'reset settings'];
    let configData = JSON.parse(fs.readFileSync('./config/default.json', 'utf8'));
    var settingsMenu = readlineSync.keyInSelect(settingsMenu, 'What do you want to do?') + 1;
    switch (settingsMenu) {
        case 1:
            var newInputDir = readlineSync.question('./path/to/inputDir \n');
            configData.Settings.inputDir = newInputDir;
            fs.writeFileSync('./config/default.json', JSON.stringify(configData));
            break;
        case 2:
            var newOutputDir = readlineSync.question('./path/to/outputDir\n');
            configData.Settings.outputDir = newOutputDir;
            fs.writeFileSync('./config/default.json', JSON.stringify(configData));
            break;
        case 3:
            var newLanguage = readlineSync.question('new language (e.g. deu)\n');
            configData.Settings.lang = newLanguage;
            fs.writeFileSync('./config/default.json', JSON.stringify(configData));
            break;
        case 4:
            configData.Settings.outputDir = './output/';
            configData.Settings.inputDir = './input/';
            configData.Settings.lang = 'deu';
            fs.writeFileSync('./config/default.json', JSON.stringify(configData));
            break;
    }
    console.log(configData.Settings);
}