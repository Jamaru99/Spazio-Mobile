export const floatToTime = (schedule) => {
    const decimal = schedule - Math.floor(schedule);
    var formattedDecimal = "";
    if(decimal == 0)
        formattedDecimal = "0";
    return `${Math.floor(schedule)}h${formattedDecimal}${decimal * 60}`
}

export const formattedDatetime = (isoDatetime) => {
    const [date, time] = isoDatetime.split("T")
    const [year, month, day] = date.split('-')

    const formattedDate = `${day}/${month}/${year}`
    const formattedTime = time.slice(0,5)
    
    return [formattedDate, formattedTime]
}

export const formattedDate = (isoDate) => {
    const [_, month, day] = isoDate.split('-')
    const formattedDate = `${day}/${month}`
    
    return formattedDate
}

export const nextDays = () => {
    var today = new Date()
    var next = []
    for(let i = 0; i < 10; i++) {
        const date = addDays(today, i)
        const isoDate = date.toISOString().split("T")[0]
        next.push(isoDate)
    }
    return next;
}

const addDays = (date, days) => {
    var date = new Date(date.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}