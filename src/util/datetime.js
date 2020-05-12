export const floatToTime = (schedule) => {
    const decimal = schedule - Math.floor(schedule);
    var formattedDecimal = "";
    if(decimal == 0)
        formattedDecimal = "0";
    return `${Math.floor(schedule)}h${formattedDecimal}${decimal * 60}`
}

export const dateAndTime = (isoDatetime) => {
    const [date, time] = isoDatetime.split("T")
    const [year, month, day] = date.split('-')

    const formattedDate = `${day}/${month}/${year}`
    const formattedTime = time.slice(0,5)
    
    return [formattedDate, formattedTime]
}

export const date = (isoDate) => {
    const [_, month, day] = isoDate.split('-')
    const formattedDate = `${day}/${month}`
    
    return formattedDate
}