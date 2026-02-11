function addTask() {

    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerText = taskText;

    li.onclick = function () {
        li.classList.toggle("completed");
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";

    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
