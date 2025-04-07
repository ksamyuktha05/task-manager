// Load tasks from local storage when page loads
window.onload = function () {
    if (localStorage.getItem("tasks")) {
      document.getElementById("task-list").innerHTML = localStorage.getItem("tasks");
    }
  };
  
  // Add a new task
  function addTask() {
    const input = document.getElementById("task-input");
    const taskText = input.value.trim();
    if (!taskText) return;
  
    const taskList = document.getElementById("task-list");
  
    const li = document.createElement("li");
    li.innerHTML = `
      ${taskText}
      <button onclick="deleteTask(this)">Delete</button>
    `;
  
    taskList.appendChild(li);
    input.value = "";
    saveTasks();
  }
  
  // Delete a task
  function deleteTask(button) {
    button.parentElement.remove();
    saveTasks();
  }
  
  // Save current list to local storage
  function saveTasks() {
    const list = document.getElementById("task-list").innerHTML;
    localStorage.setItem("tasks", list);
  }
  
