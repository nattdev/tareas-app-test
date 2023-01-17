import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

//(() => {
const btn = document.querySelector("[data-form-btn]");

const createTask = (e) => {
    e.preventDefault();    
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    console.log(value);
    input.value = "";
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);

    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.appendChild(taskContent);
    task.classList.add("card");
    list.appendChild(task);
    task.appendChild(deleteIcon());
}

btn.addEventListener("click", createTask)

//})();