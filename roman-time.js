var hours = process.argv[2];
var minutes = process.argv[3];
// Немного замечательного кода и магии

if (parseInt(hours) > 23 || parseInt(hours) < 0 || parseInt(hours) > 59 || parseInt(hours) < 0) {
    console.log("Время указано неверно!");
}
else {
    var romanTime = {
        "1": "I",
        "2": "II",
        "3": "III",
        "4": "IV",
        "5": "V",
        "6": "VI",
        "7": "VII",
        "8": "VIII",
        "9": "IX",
        "10": "X",
        "20": "XX",
        "30": "XXX",
        "40": "XL",
        "50": "L"
    };
    var romanHours = "";
    var romanMinutes = "";

    if (parseInt(hours) === 0) {
        romanHours = "NN";
    }
    else if (parseInt(hours) % 10 !== 0) {
        var temp = (Math.floor(parseInt(hours) / 10) * 10).toString();
        var temp2 = (parseInt(hours) % 10).toString();
        romanHours = romanTime[temp] + romanTime[temp2];
    }
    else {
        romanHours = romanTime[hours];
    }

    if (minutes === "00") {
        romanMinutes = "NN";
    }
    else if (parseInt(minutes) % 10 !== 0) {
        var temp = (Math.floor(parseInt(minutes) / 10) * 10).toString();
        var temp2 = (parseInt(minutes) % 10).toString();
        romanMinutes = romanTime[temp] + romanTime[temp2];
    }
    else {
        romanMinutes = romanTime[minutes];
    }

    console.log(romanHours + ":" + romanMinutes);
}