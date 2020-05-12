export const floatToTime = (schedule) =>{
    const decimal = schedule - Math.floor(schedule);
    var formattedDecimal = "";
    if(decimal == 0)
        formattedDecimal = "0";
    return `${Math.floor(schedule)}h${formattedDecimal}${decimal * 60}`
}