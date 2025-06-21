function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskTime = document.getElementById("taskTime");
    const taskText = taskInput.value.trim();
    const timeValue = taskTime.value;
  
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
    const taskList = document.getElementById("taskList");
  
    const li = document.createElement("li");
  
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
  
    const timeSpan = document.createElement("span");
    timeSpan.classList.add("task-time");
    if (timeValue) {
      timeSpan.textContent = `⏰ ${timeValue}`;
    }
  
    li.appendChild(taskSpan);
    li.appendChild(timeSpan);
  
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.onclick = function (e) {
      e.stopPropagation(); // Prevent line-through on delete click
      taskList.removeChild(li);
    };
  
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  
    // Clear inputs
    taskInput.value = "";
    taskTime.value = "";
  }
  