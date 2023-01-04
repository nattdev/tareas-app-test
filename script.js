(() => {
const btn = document.querySelector("[data-form-btn]");
const input = document.querySelector("[data-form-input]");

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
}

btn.addEventListener("click", createTask)

const checkComplete = () => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-check-square", "icon");
  i.addEventListener("click", completeTask);
  return i;
}

const completeTask = (e) => {
  const element = e.target;
  element.classList.toggle("fas");
  element.classList.toggle("completeIcon");
  element.classList.toggle("far");
}
})