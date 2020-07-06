"use strict";

let day = prompt('Введите месяц')
switch ( day ) {
    case '1':
    case '2':
    case '12':
           {
        let result = 'Зима';
        alert(result);
    }
    break

    case '3':
    case '4':
    case '5':
            {
        let result = 'Весна';
        alert(result);
    }
    break

    case '6':
    case '7':
    case '8':
            {
        let result = 'Лето';
        alert(result);
    }
        break

    case '9':
    case '10':
    case '11':
    {
        let result = 'Осень';
        alert(result);
    }
        break

        default: {
        let result = "в нашем календаре такого месяца нет";
        alert(result);
    }

}

