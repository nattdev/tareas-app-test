export const uniqueDates = (tasks) => {
    const dates = [];

    tasks.forEach(task => {
        if(!dates.includes(task.dateFormat)) dates.push(task.dateFormat);
    });
    
    return dates;
}