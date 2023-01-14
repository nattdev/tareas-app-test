import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';


const addTask = (evento) => {
    evento.preventDefault();
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const dateTime = document.querySelector("[data-form-date]");

    const value = input.value;
    const date = dateTime.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");
    
    input.value = '';
    dateTime.value = "";
    
    const taskObject = {
      value,
      dateFormat,
    };

    const task = createTask(taskObject);
    
    list.appendChild(task);
    
    taskList.push(taskObject);

    localStorage.setItem('tasks', JSON.stringify(taskList));
    
}


export const createTask = ({value, dateFormat}) => {

    const task = document.createElement('li');
    task.classList.add('card');
    const taskContent = document.createElement('div');
    const titleTask = document.createElement('span');
    const dateElement = document.createElement("span");
    dateElement.innerHTML = dateFormat;

    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
    return task;
};

export default addTask;