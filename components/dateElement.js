export default (date) => {
    const dateElement = document.createElement("li");
    dateElement.classList.add("date");
    dateElement.innerHTML = date;
    // console.log(dateElement);
    return dateElement;
};