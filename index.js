const inputBox = document.getElementById("input-box");
const listCont = document.getElementById("list-container");

const addTodo = () => {
  if (inputBox.value === "") {
    alert("The todo field cannot be empty");
  } else {
    let li = document.createElement("li");
    li.textContent = inputBox.value;
    listCont.appendChild(li);
    let span = document.createElement("span");
    span.innerText = "\u00d7";
    li.appendChild(span);
  }

  inputBox.value = "";
  saveTodo();
};

listCont.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveTodo();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveTodo();
    }
  },
  false
);

function saveTodo() {
  localStorage.setItem("todo", listCont.innerHTML);
}

function showTodo() {
  listCont.innerHTML = localStorage.getItem("todo");
}

showTodo();
