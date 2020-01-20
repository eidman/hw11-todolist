// ● Create a form that submits a new to do and uses a function to put it on the page.
// ● Create an array of pre - existing todos that will be added to the page on page load
// by looping through them one at a time(see my application has “Do laundry” and “Cook Dinner”
// ● Bonus - Try to add a remove button that destroys the list item
// ● Bonus 2 - Begin styling your todo list

document.addEventListener("DOMContentLoaded", function() {
  var eat = ["Eat", "Sleep", "Die"];

  //    forEach loop
  eat.forEach(function(eat, index) {
    var li = document.createElement("li");
    li.innerHTML = eat;
    var container = document.querySelector(".list");
    container.appendChild(li);
  });

  var form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // select task input
    var taskInput = document.querySelector(".task");
    // capture value of the task input
    var taskValue = taskInput.value;

    var task = document.createElement("li");
    task.innerHTML = taskValue + " Remove";
    var list = document.querySelector(".list");

    list.appendChild(task);
    list.addEventListener("click", function() {
      task.remove();
    });
  });
});
