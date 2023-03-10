import notify from "./notify"

type types = {
    value: string,
    notifyLabel?: React.ReactNode | string | number 
}


const copyValue = ({value, notifyLabel}:types) => {
    navigator.clipboard.writeText(value).then(res => {
        if(notifyLabel) {
            notify(notifyLabel, 'SUCCESS')
        } else {
            notify('Успешно!', 'SUCCESS')
        }
    }).catch(err => {
        console.log(err)
        notify('Произошла ошибка!', 'ERROR')
    })
}

export default copyValue;