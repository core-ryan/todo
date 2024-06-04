export default function createTodoItem (title, description, dueDate, priority) {
    let itemStatus = false;
    return {itemStatus, title, description, dueDate, priority};
}