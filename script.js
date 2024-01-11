var taskInput = document.getElementById("task");
var taskList = document.getElementById("task-list");

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask(){
    var taskText = taskInput.value.trim();
    if (taskText === ""){
        return;
    }
    var li = document.createElement("li");
    var dueDate = document.getElementById("due-date").value;
    li.innerHTML = `<strong>${taskText}</strong> ${dueDate}
    <button onclick="removeTask(this)">Delete</button>
    `;
    var prioritySelect = document.getElementById("priority");
    var priority = prioritySelect.value;
    switch (priority){
        case "high":
            li.classList.add("high-priority");
            break;
        case "medium":
            li.classList.add("medium-priority");
            break;
        case "low":
            li.classList.add("low-priority");
            break;
        default:
            break;
    }
    taskList.append(li);
    taskInput.value = "";

    li.addEventListener("click", function(){
        li.classList.toggle("checked");
    });
}

function removeTask(button){
    li = button.parentElement;
    li.remove();
}
