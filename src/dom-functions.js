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

export function addProjectItem(projectItem){
    const field = document.getElementById("sidebar-field");
    const label = document.createElement("p");
    label.innerHTML = projectItem.name;

    field.appendChild(label);
}

export function displayTaskForm(){
    const form = document.getElementById("add-form");
    form.style.display = "block";
}

export function hideTaskForm(){
    const form = document.getElementById("add-form");
    form.style.display = "none";
}

export function displayProjectForm(){
    const form = document.getElementById("project-form");
    form.style.display = "block";
}

export function hideProjectForm(){
    const form = document.getElementById("project-form");
    form.style.display = "none";
}