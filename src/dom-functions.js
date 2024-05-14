export function addTodoItem(todoItem) {
    const field = document.getElementById("todo-field");
    const card = document.createElement("div");
    card.classList.add("todo-card");


    const check = document.createElement("INPUT");
    check.setAttribute("type", "checkbox");

    const titleText = document.createElement("p");
    const descText = document.createElement("p");
    const dateText = document.createElement("p");
    const priorityText = document.createElement("p");
    titleText.innerHTML = todoItem.title;
    descText.innerHTML = todoItem.description;
    dateText.innerHTML = todoItem.dueDate;
    priorityText.innerHTML = todoItem.priority;

    card.appendChild(check);
    card.appendChild(titleText);
    card.appendChild(descText);
    card.appendChild(dateText);
    card.appendChild(priorityText);

    field.appendChild(card);

}