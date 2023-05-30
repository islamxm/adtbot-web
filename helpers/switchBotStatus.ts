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
    if(((activation_datetime === null && stop_datetime === null) || (activation_datetime !== null && stop_datetime !== null)) && enabled === true) {
        return 2;
    }
    if((activation_datetime === null && stop_datetime === null) && enabled === false) {
        return 3;
    }
    if(stop_datetime !== null && enabled === false) {
        return 4;
    }
    return 1
}
//1 - ACTIVE, 2 - WAIT, 3 - CHERNOVIK, 4 - STOPPED



export default switchBotStatus;