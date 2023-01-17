import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";
import { sortDates, uniqueDates } from "../services/date.js";

const displayTask = () => {
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    const list = document.querySelector("[data-list]");
        // console.log(dateElement("03/10/2023"))

    const dates = uniqueDates(taskList);
    sortDates(dates);
    console.log(dates);

    dates.forEach((dates) => {
        list.appendChild(dateElement(dates));
        taskList.forEach((task) => {
            if (dates == task.dateFormat) {
                list.appendChild(createTask(task));
            }
        });    
    });
};

export default displayTask;