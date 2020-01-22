// ● Create a form that submits a new to do and uses a function to put it on the page.
// ● Create an array of pre - existing todos that will be added to the page on page load
// by looping through them one at a time(see my application has “Do laundry” and “Cook Dinner”
// ● Bonus - Try to add a remove button that destroys the list item
// ● Bonus 2 - Begin styling your todo list

document.addEventListener("DOMContentLoaded", function() {
  var eatSleepDie = ["EAT", "SLEEP", "DIE"];

  // forEach loop
  eatSleepDie.forEach(function(eatSleepDie, index) {
    let li = document.createElement("li");
    li.innerHTML = eatSleepDie;
    let container = document.querySelector(".list");
    container.appendChild(li);
  });

  loadEvents();
  // load every event in the page
  function loadEvents() {
    document.querySelector("form").addEventListener("submit", submit);
    document.getElementById("clear").addEventListener("click", clearList);
    document.querySelector("ul").addEventListener("click", deleteOrTick);
  }

  // submit data function
  function submit(event) {
    event.preventDefault();
    let input = document.querySelector("input");
    if (input.value != "") addTask(input.value);
    input.value = "";
  }

  // add tasks
  function addTask(task) {
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`;
    ul.appendChild(li);
    document.querySelector(".tasksList").style.display = "block";
  }

  // clear the LIST
  function clearList(event) {
    document.querySelector("ul").innerHTML = "";
  }

  // deleteTick
  function deleteOrTick(event) {
    var className = event.target.className;
    if (className === "delete") deleteTask(event);
    else {
      tickTask(event);
    }
  }

  // delete task
  function deleteTask(event) {
    let remove = event.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
  }

  // tick a task
  function tickTask(event) {
    const task = event.target.nextSibling;
    if (event.target.checked) {
      task.style.textDecoration = "line-through";
      task.style.color = "#ff0000";
    } else {
      task.style.textDecoration = "none";
      task.style.color = "#000";
    }
  }
});
