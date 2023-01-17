const deleteIcon = () => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deleteTask);
    return i;
  }
  
  const deleteTask = (e) => {
    const element = e.target;
    const parent = element.parentElement;
    parent.remove();
  }

export default deleteIcon;