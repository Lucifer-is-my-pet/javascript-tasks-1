'use strict';

var hours = parseInt(process.argv[2]);
var minutes = parseInt(process.argv[3]);
// Немного замечательного кода и магии

if (hours > 23 || hours < 0 || minutes > 59 || minutes < 0) {
    console.log('Время указано неверно!');
} else {
    var romanTime = {
        0: 'NN', // у ноля нет обозначения, так что он будет N от своего латинского названия
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX',
        10: 'X',
        20: 'XX',
        30: 'XXX',
        40: 'XL',
        50: 'L'
    };
    var romanHours = '';
    var romanMinutes = '';

    if (hours % 10 !== 0 && hours > 10) {
        var temp = Math.floor(hours / 10) * 10;
        var temp2 = hours % 10;
        romanHours = romanTime[temp] + romanTime[temp2];
    } else {
        romanHours = romanTime[hours];
    }

    if (minutes % 10 !== 0 && minutes > 10) {
        var temp = Math.floor(minutes / 10) * 10;
        var temp2 = minutes % 10;
        romanMinutes = romanTime[temp] + romanTime[temp2];
    } else {
        romanMinutes = romanTime[minutes];
    }

    console.log(romanHours + ':' + romanMinutes);
}
