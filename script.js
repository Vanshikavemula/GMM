document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = taskText + '<button class="delete">X</button>';

    document.getElementById("taskList").appendChild(li);
    input.value = "";

    li.querySelector(".delete").addEventListener("click", function() {
        li.remove();
    });
}
