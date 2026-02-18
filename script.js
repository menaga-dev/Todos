// script.js for To-Do App using localStorage

// Add a task to the list
function addTask(task) {
    let tasks = getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Get all tasks from localStorage
function getTasks() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

// Remove a task from the list
function removeTask(task) {
    let tasks = getTasks();
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear all tasks
function clearTasks() {
    localStorage.removeItem('tasks');
}

// Example usage:
addTask('Learn JavaScript');
console.log(getTasks());  // should log the tasks
removeTask('Learn JavaScript');
console.log(getTasks());  // should be empty
