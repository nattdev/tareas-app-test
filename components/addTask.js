import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import displayTask from './readTask.js';


const addTask = (evento) => {
    evento.preventDefault();
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const dateTime = document.querySelector("[data-form-date]");

    const value = input.value;
    const date = dateTime.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");
    const complete = false;


    input.value = '';
    dateTime.value = "";
    
    const taskObject = {
      value,
      dateFormat,
      complete,
      id : uuid.v4(),
    };

    list.innerHTML = "";

    if (value == "" || date == "") {
      return;
    } 

    taskList.push(taskObject);
    localStorage.setItem('tasks', JSON.stringify(taskList));

    displayTask();
}


export const createTask = ({value, dateFormat, complete, id}) => {

    const task = document.createElement('li');
    task.classList.add('card');
    const taskContent = document.createElement('div');
    const titleTask = document.createElement('span');
    const dateElement = document.createElement("span");
    dateElement.innerHTML = dateFormat;
    console.log(complete);
    const check = checkComplete(id);
    if (complete) {
      element.classList.toggle('fas');
      element.classList.toggle('completeIcon');
      element.classList.toggle('far');
    }

    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(check);
    taskContent.appendChild(titleTask);

    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon(id));
    return task;
};

export default addTask;