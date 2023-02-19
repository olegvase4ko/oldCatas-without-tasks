let solution = [];

let dateStr = '23/03';

solution = function (dateStr) {

    const date = dateStr.split("/");
    let day = parseInt(date[0]);
    let month = parseInt(date[1]);
    let zodiak = ' ';
    switch (month) {
        case 1:
            if (day <= 20)
                zodiak = 'Козерог';
            else if (day > 20 && day <= 31)
                zodiak = 'Водолей';
            else
                zodiak = 'ERROR DATE';
            break;
        case 2:
            if (day <= 19)
                zodiak = 'Водолей';
            else if (day > 19 && day <= 31)
                zodiak = 'Рыбы';
            else
                zodiak = 'ERROR DATE';
            break;
        case 3:
            if (day <= 20)
                zodiak = 'Рыбы';
            else if (day > 20 && day <= 31)
                zodiak = 'Овен';
            else
                zodiak = 'ERROR DATE';
            break;
        case 4:
            if (day <= 20)
                zodiak = 'Овен';
            else if (day > 20 && day <= 31)
                zodiak = 'Телец';
            else
                zodiak = 'ERROR DATE';
            break;
        case 5:
            if (day <= 21)
                zodiak = 'Телец';
            else if (day > 21 && day <= 31)
                zodiak = 'Близнецы';
            else
                zodiak = 'ERROR DATE';
            break;
        case 6:
            if (day <= 21)
                zodiak = 'Близнецы';
            else if (day > 21 && day <= 31)
                zodiak = 'Рак';
            else
                zodiak = 'ERROR DATE';
            break;
        case 7:
            if (day <= 22)
                zodiak = 'Рак';
            else if (day > 22 && day <= 31)
                zodiak = 'Лев';
            else
                zodiak = 'ERROR DATE';
            break;
        case 8:
            if (day <= 21)
                zodiak = 'Лев';
            else if (day > 21 && day <= 31)
                zodiak = 'Дева';
            else
                zodiak = 'ERROR DATE';
            break;
        case 9:
            if (day <= 23)
                zodiak = 'Дева';
            else if (day > 23 && day <= 31)
                zodiak = 'Весы';
            else
                zodiak = 'ERROR DATE';
            break;
        case 10:
            if (day <= 23)
                zodiak = 'Весы';
            else if (day > 23 && day <= 31)
                zodiak = 'Скорпион';
            else
                zodiak = 'ERROR DATE';
            break;
        case 11:
            if (day <= 22)
                zodiak = 'Скорпион';
            else if (day > 22 && day <= 31)
                zodiak = 'Стрелец';
            else
                zodiak = 'ERROR DATE';
            break;
        case 12:
            if (day <= 22)
                zodiak = 'Стрелец';
            else if (day > 22 && day <= 31)
                zodiak = 'Козерог';
            else
                zodiak = 'ERROR DATE';
            break;
        default: zodiak = 'ERROR DATE';


    }
    return zodiak;

}
console.log(solution(dateStr));