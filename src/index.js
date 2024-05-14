import './styles.css';
import createTodoItem from './todo-item.js';
import { addTodoItem } from './dom-functions.js';

const v = createTodoItem("New Title", "New Desc", "New Date", "New Priority");
document.getElementById("add-button").addEventListener("click", function(){
    addTodoItem(v);
});