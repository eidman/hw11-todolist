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
    li.innerHTML = `<input type="checkbox"><label>${eatSleepDie}</label><span class="delete"> ×</span>`;
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

  // TASK INPUT
  function submit(event) {
    event.preventDefault();
    let input = document.querySelector("input");
    if (input.value != "") addTask(input.value);
    input.value = "";
  }

  // ADD TASK
  function addTask(task) {
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    li.innerHTML = `<input type="checkbox"><label>${task}</label><span class="delete"> ×</span>`;
    ul.appendChild(li);
    document.querySelector(".tasksList").style.display = "block";
  }

  // CLEAR ALL
  function clearList(event) {
    document.querySelector("ul").innerHTML = "";
  }

  // DELETE X
  function deleteOrTick(event) {
    var className = event.target.className;
    if (className === "delete") deleteTask(event);
    else {
      tickTask(event);
    }
  }

  // DELETE TASK
  function deleteTask(event) {
    let remove = event.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
  }

  // TICK TASK
  function tickTask(event) {
    const task = event.target.nextSibling;
    if (event.target.checked) {
      task.style.textDecoration = "line-through";
      task.style.color = "red";
    } else {
      task.style.textDecoration = "none";
      task.style.color = "#000";
    }
  }
});
