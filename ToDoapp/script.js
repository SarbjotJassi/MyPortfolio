function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if (task === "") return alert("Please enter a task!");

    let li = document.createElement("li");
    li.innerHTML = `${task} <button onclick="this.parentElement.remove()">Delete</button>`;

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}
