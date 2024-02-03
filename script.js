var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var list = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode('Delete'));
	li.appendChild(document.createTextNode(input.value));
	list.appendChild(li);
	li.appendChild(btn);
	input.value = "";
}

function addListAfterClick(event) {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneTask(task){
	if(task.target.localName === 'li'){
		task.target.classList.toggle('done');
	}
}

function deleteTask(task){
	if(task.target.localName === 'button'){
		task.target.parentElement.remove();
	}
}

function listTaskAfterClick(task){
	doneTask(task);
	deleteTask(task);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

list.addEventListener('click',listTaskAfterClick)