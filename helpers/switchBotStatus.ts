const switchBotStatus = ({  
    enabled,
    stop_datetime,
    activation_datetime
}: {
    enabled?: boolean,
    stop_datetime?: null | string,
    activation_datetime?: string
}) => {
    if(enabled && stop_datetime === null && activation_datetime) {
        return 1;
    }
    if(enabled && stop_datetime) {
        return 2;
    }
    if(enabled === false) {
        return 3;
    }
    return 1
}
//1 - ACTIVE, 2 - WAIT, 3 - DISABLED



export default switchBotStatus;