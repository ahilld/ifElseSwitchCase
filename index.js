"use strict";
let num = prompt('Введите значение переменой')
switch ( num ) {
    case '1': {
        let result = 'Зима';
        alert(result);
    }
    break

    case '2': {
        let result = 'Весна';
        alert(result);
    }
    break

    case '3': {
        let result = 'Лето';
        alert(result);
    }
        break

    case '4': {
        let result = 'Осень';
        alert(result);
    }
        break

    default: {
        let result = "На нашей планете всего 4 времени года";
        alert(result);
    }

}

