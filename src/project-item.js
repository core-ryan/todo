export default function createProjectItem (newName) {
    const name = newName;
    let tasks = [];
    const addTask = (newTask) => tasks.push(newTask);

    return {name, tasks, addTask};
}