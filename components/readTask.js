import { createTask } from "./addTask.js";


const readTask = () => {
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    const list = document.querySelector("[data-list]");

    taskList.forEach((task) => {
        list.appendChild(createTask(task));
    });

};

export default readTask;