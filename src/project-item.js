export function createProjectItem (newName) {
    const name = newName;
    let tasks = [];
    let finishedTasks = [];
    const addTask = (newTask) => tasks.push(newTask);
    const removeTask = (index) => {
        tasks.splice(index, 1);
    };

    return {name, tasks, finishedTasks, addTask, removeTask};
}

export function createProjectItemJSON (newName, newTasks, newFinished){
    const name = newName;
    let tasks = newTasks;
    let finishedTasks = newFinished;

    return {name, tasks, finishedTasks};
}