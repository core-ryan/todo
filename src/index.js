import './styles.css';
import createTodoItem from './todo-item.js';
import { createProjectItem, createProjectItemJSON } from './project-item.js';
import createCore from './core.js';
import { addTodoItem, addProjectItem, displayTaskForm, hideTaskForm, displayProjectForm, hideProjectForm } from './dom-functions.js';

let mainCore = createCore();

// Testing Object creation and methods
const v = createTodoItem("New Title", "New Desc", "New Date", "New Priority");
const x = createTodoItem("New Title 2", "New Desc 2", "New Date 2", "New Priority 2");
// newProject.addTask(v);
// newProject.addTask(x);

//alert(newProject.tasks[1].description);
// End Test

window.onload = function(){
//     mainCore = JSON.parse(localStorage.getItem('save'));
//     for(let i = 0; i < mainCore.container.length; i++){
//         alert(i);
//     }
    console.log(localStorage.getItem('save'));
}

document.getElementById("save").addEventListener("click", function(){
    // localStorage.setItem('save', JSON.stringify(mainCore));

    // A 'core' object to hold a copy of mainCore excluding project methods
    let copyCore = createCore();

    // Loop through all projects currently in the mainCore
    for(let i = 0; i < mainCore.container.length; i++){
        // Create copy of project with no methods to save to localStorage
        let tempProject = createProjectItemJSON(mainCore.container[i].name, mainCore.container[i].tasks, mainCore.container[i].finishedTasks);

        copyCore.container.push(tempProject);
    }

    // console.log(copyCore);

    localStorage.setItem('save', JSON.stringify(copyCore));
});

document.getElementById("clear").addEventListener("click", function(){
    localStorage.clear();
});

document.getElementById("add-todo-button").addEventListener("click", function(){
    displayTaskForm();
    // addTodoItem(v);
});

document.getElementById("add-project-button").addEventListener("click", function(){
    // addProjectItem(newProject);
    displayProjectForm();
});

document.getElementById("cancel-button").addEventListener("click", function(){
    hideTaskForm()
});

document.getElementById("cancel-button-p").addEventListener("click", function(){
    hideProjectForm()
});

document.getElementById("submit-item").addEventListener("click", function(){
    // will need to get current project
    
    hideTaskForm();

    const formDataTitle = document.getElementById("title").value;
    const formDataDesc = document.getElementById("desc").value;
    const formDataDate = document.getElementById("date").value;

    // Holds checked radio button value retrived by following loop
    let selectedRadio = "";

    // Loops through form inputs
    let inputs = document.getElementsByTagName("input");
    for(let i = 0; i < inputs.length; i++){
        // For every input, check that it is a radio button, and the checked status
        if(inputs[i].type == "radio" && inputs[i].checked){
            selectedRadio = inputs[i].value;
            console.log(mainCore);
        }
    }

    // New todo item created from form input
    const newItem = createTodoItem(formDataTitle, formDataDesc, formDataDate, selectedRadio);

    // Add new todo card in todo list
    addTodoItem(newItem);

    // Search for appropriate project in main container
    for(let i = 0; i < mainCore.container.length; i++){
        // Select the current project
        if(mainCore.container[i] == mainCore.current){
            // Add new task to current project
            mainCore.container[i].tasks.push(newItem);
        }
    }

    // Clears the "Add Item" form for new inputs
    document.getElementById("task-form").reset();
});

document.getElementById("submit-project").addEventListener("click", function (){
    hideProjectForm();

    const newProject = createProjectItem(document.getElementById("project").value);
    
    // Adds project name to sidebar project list
    addProjectItem(newProject);

    console.log(newProject);
    // Add project to main container
    if(mainCore.current == ""){
        mainCore.current = newProject;
    }
    mainCore.container.push(newProject);
    console.log(mainCore.container);
    
    // Clears the "Add Project" form for new inputs
    document.getElementById("pf-form").reset();
});
