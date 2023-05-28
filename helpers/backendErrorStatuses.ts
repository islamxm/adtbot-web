import notify from "./notify";


const backendErrorStatuses = (status: any) => {
    switch(status) {
        case 1:
            notify('Неизвестная ошибка', 'ERROR')
        case 2:
            notify('Пользователь не найден', 'ERROR')
        case 3:
            notify('Недостаточно данных','ERROR')
        case 4: 
            notify('Код бота неправильный')
        case 5:
            notify('Текущий тариф не позволяет выполнить данную операцию', 'ERROR')
        case 6:
            notify('Бот включен', 'ERROR')
        case 7:
            notify('Бот выключен', 'ERROR')
        case 8:
            notify('BAD_USER_SCORE','ERROR')
        case 9:
            notify('Неправильный код телеграм бота', 'ERROR')
        case 10: 
            notify('Некорректные данные, не удалось подключится', 'ERROR')
        case 11:
            notify('Ошибка оплаты', 'ERROR')
        case 12:
            notify('У вас уже выбран данный тариф', 'ERROR')
        case 13:
            notify('Недостаточно средств', 'ERROR')
        case 14:
            notify('Неправильный код CAPTCHA')
        case 15:
            notify('Неправильный реферальный код','ERROR')
        case 16:
            notify('Пользователь уже зарегистрирован', 'ERROR')
        case 17:
            notify('Не удалось отправить e-mail', 'ERROR')
        case 18:
            notify('E-mail не верифицирован','ERROR')
        case 20:
            notify('Неправильный код', 'ERROR')
        case 21:
            notify('UNVERIFIED_IP', 'ERROR')
        case 22:
            notify('Неправильный пароль', 'ERROR')
        default:
            break;
    }
}

export default backendErrorStatuses;