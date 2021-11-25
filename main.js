
$(document).keypress(function (e) {
   if (e.which == 13) {
      document.getElementById("delete").click();
   }
});


document.querySelector('#delete').onclick = function () {
   if (document.querySelector('#newtask input').value.length == 0) {
      alert("Task field has no data. Please fill the task info")
   } else {
      document.querySelector('#task-list').innerHTML += `
      <div class="task"> 
         <span id="taskname"> 
         ${document.querySelector('#newtask input').value}
         </span>
         <button class="delete">
         <i class="fas fa-trash"></i>
         </button>
      </div>
      `;

      document.querySelector('#newtask input').value = "";

      let current_tasks = document.querySelectorAll(".delete");
      for (let i = 0; i < current_tasks.length; i++) {
         current_tasks[i].onclick = function () {
            this.parentNode.remove();
         }
      }
   }

   let tasks = document.querySelectorAll(".task");
   for (let i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
         this.classList.toggle('completed');
      }
   }
}