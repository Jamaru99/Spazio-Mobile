import { texts } from '@utils';

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

export const isoDatetime = (isoDate, time) => {
    const formattedTime = time.length === 4 ? `0${time}` : time
    return `${isoDate}T${formattedTime}`
}

export const nextDays = () => {
    var today = new Date()
    var next = []
    for(let i = 0; i < 15; i++) {
        const date = addDays(today, i)
        const isoDate = date.toISOString().split("T")[0]
        if(date.getDay() > 1)
            next.push({ date: isoDate, weekday: getWeekday(date.getDay()) })
    }
    return next;
}

const getWeekday = (weekdayNumber) => {
    switch(weekdayNumber) {
        case 0: return texts["sunday"]
        case 1: return texts["monday"]
        case 2: return texts["tuesday"]
        case 3: return texts["wednesday"]
        case 4: return texts["thursday"]
        case 5: return texts["friday"]
        case 6: return texts["saturday"]
    }
}

const addDays = (date, days) => {
    var date = new Date(date.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}