import './styles.css';
import createTodoItem from './todo-item.js';
import createProjectItem from './project-item.js';
import { addTodoItem, addProjectItem, displayTaskForm, hideTaskForm, displayProjectForm, hideProjectForm } from './dom-functions.js';

// Testing Object creation and methods
const v = createTodoItem("New Title", "New Desc", "New Date", "New Priority");
const x = createTodoItem("New Title 2", "New Desc 2", "New Date 2", "New Priority 2");
const newProject = createProjectItem("Project 1");
newProject.addTask(v);
newProject.addTask(x);

//alert(newProject.tasks[1].description);
// End Test

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

