import Link from "next/link";
import notify from "./notify";


const backendErrorStatuses = (status: any) => {
    console.log(status)
    if(status === 1) {
        notify('Неизвестная ошибка', 'ERROR')
    }
    if(status === 2) {
        notify(<div>Данного пользователя не существует. <Link className="def-link" href={'/'}>Зарегистрироваться</Link></div>, 'ERROR')
    }
    if(status === 3) {
        notify('Недостаточно данных','ERROR')
    }
    if(status === 4) {
        notify('Код бота неправильный', 'ERROR')
    }
    if(status === 5) {
        notify('Текущий тариф не позволяет выполнить данную операцию', 'ERROR')
    }
    if(status === 6) {
        notify('Бот включен', 'ERROR')
    }
    if(status === 7) {
        notify('Бот выключен', 'ERROR')
    }
    if(status === 8) {
        notify('BAD_USER_SCORE','ERROR')
    }
    if(status === 9) {
        notify('Неправильный код телеграм бота', 'ERROR')
    }
    if(status === 10) {
        notify('Некорректные данные, не удалось подключится', 'ERROR')
    }
    if(status === 11) {
        notify('Ошибка оплаты', 'ERROR')
    }
    if(status === 12) {
        notify('У вас уже выбран данный тариф', 'ERROR')
    }
    if(status === 13) {
        notify('Недостаточно средств', 'ERROR')
    }
    if(status === 14) {
        notify('Неправильный код CAPTCHA', 'ERROR')
    }
    if(status === 15) {
        notify('Неправильный реферальный код','ERROR')
    }
    if(status === 16) {
        notify('Пользователь уже зарегистрирован', 'ERROR')
    }
    if(status === 17) {
        notify('Не удалось отправить e-mail', 'ERROR')
    }
    if(status === 18) {
        notify('E-mail не верифицирован','ERROR')
    }
    if(status === 20) {
        notify('Неправильный код', 'ERROR')
    }
    if(status === 21) {
        notify('UNVERIFIED_IP', 'ERROR')
    }
    if(status === 22) {
        notify('Неправильный пароль', 'ERROR')
    }
}

export default backendErrorStatuses;