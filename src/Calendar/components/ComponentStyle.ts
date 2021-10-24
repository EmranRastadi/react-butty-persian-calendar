function isSelected(day: any , value : any) {
    return value.isSame(day, "day");
}

function beforeMonth(day : any , value : any){
    return value.isBefore(day  , "month");
}
function afterMonth(day : any , value : any){
    return value.isAfter(day  , "month");
}

function isToday(day: any) {
    return day.isSame(new Date(), "day");
}

export function dayStyle(day : any , value : any){
    if (beforeMonth(day , value) || afterMonth(day , value)) return "hidden";
    if(isSelected(day , value)) return "selected";
    if (isToday(day)) return "today";
    return "";
}
