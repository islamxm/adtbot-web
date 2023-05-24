const senseValue = (hide: boolean, value: React.ReactNode) => {
    if(hide) {
        return '***'
    } else {
        return value
    }
}

export default senseValue;