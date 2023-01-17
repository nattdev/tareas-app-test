export const uniqueDates = (tasks) => {
    const dates = [];

    tasks.forEach(task => {
        if(!dates.includes(task.dateFormat)) dates.push(task.dateFormat);
    });
    
    return dates;
}

export const sortDates = (dates) => {
    dates.sort((a,b) => {
        const firstDate = moment(a, "DD/MM/YYYY");
        const secondDate = moment(b, "DD/MM/YYYY");
        return firstDate - secondDate;
    });

}