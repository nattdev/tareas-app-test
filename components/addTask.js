import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';


const addTask = (evento) => {
    const list = document.querySelector('[data-list]');
    const task = createTask(evento);
    list.appendChild(task);
}


const createTask = (evento) => {
    evento.preventDefault();
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log(taskList);
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const dateTime = document.querySelector("[data-form-date]");
    const date = dateTime.value;
    const task = document.createElement('li');
    const dateFormat = moment(date).format("DD/MM/YYYY");
    task.classList.add('card');
    input.value = '';
    //backticks
    const taskContent = document.createElement('div');
    const taskObject = {
      value,
      dateFormat,
    };
    
    taskList.push(taskObject);
    localStorage.setItem('tasks', JSON.stringify(taskList));
    
    console.log(taskObject);
    const titleTask = document.createElement('span');
    const dateElement = document.createElement("span");
    dateElement.innerHTML = dateFormat;
    console.log(dateElement);
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    // task.innerHTML = content;
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
    return task;
};

export default addTask;