// Task Manager (CRUD operations)

let tasks = []; // Array to store tasks

// Function to add a new task
function addTask(id, name, description) {
  const task = { id, name, description };
  tasks.push(task);
  console.log(`Task added: ${name}`);
}

// Function to get all tasks
function getAllTasks() {
  if (tasks.length === 0) {
    console.log('No tasks found.');
  } else {
    console.log('All Tasks:');
    tasks.forEach((task) => {
      console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
    });
  }
}

// Function to update a task by id
function updateTask(id, newName, newDescription) {
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    console.log(`Task with ID ${id} not found.`);
    return;
  }

  tasks[taskIndex].name = newName;
  tasks[taskIndex].description = newDescription;
  console.log(`Task with ID ${id} has been updated.`);
}

// Function to delete a task by id
function deleteTask(id) {
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    console.log(`Task with ID ${id} not found.`);
    return;
  }

  tasks.splice(taskIndex, 1); // Remove the task from the array
  console.log(`Task with ID ${id} has been deleted.`);
}

// Example Usage
addTask(1, 'Learn JavaScript', 'Study JavaScript basics and syntax');
addTask(2, 'Write Midterm', 'Complete the midterm exam for programming');
getAllTasks();
updateTask(1, 'Learn JavaScript Advanced', 'Study advanced JavaScript topics');
getAllTasks();
deleteTask(2);
getAllTasks();
