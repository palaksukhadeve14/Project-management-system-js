
const searchInput = document.querySelector(".search input");


searchInput.addEventListener("input",function(){
    const searchText = searchInput.value.toLowerCase();

    const tasksRow = document.querySelectorAll(".tasks-card tbody tr"); 
    
    tasksRow.forEach(function(row){
        const taskName=row.children[0].textContent.toLowerCase();

        if(taskName.includes(searchText)){
            row.style.display="";
        }
        else{
            row.style.display="none";
        }
    });
});

const viewAllButton = document.querySelector(".view-btn");

viewAllButton.addEventListener("click",function(){
    window.location.href="projects.html";
})

const addTaskButton=document.querySelector(".add-task");
const taskModal=document.querySelector("#taskModal");
const closeModal=document.querySelector("#closeModal");
const cancelTask=document.querySelector("#cancelTask");

addTaskButton.addEventListener("click",function(){
    taskModal.style.display="flex";
});
closeModal.addEventListener("click",function(){
    taskModal.style.display="none";
});
cancelTask.addEventListener("click",function(){
    taskModal.style.display="none";
});

const taskform=document.querySelector("#taskForm");

const taskNameInput=document.querySelector("#taskName");
const taskProjectInput=document.querySelector("#taskProject");
const taskDateInput=document.querySelector("#taskDate");
const taskPriorityInput=document.querySelector("#taskPriority");
const taskStatusInput=document.querySelector("#taskStatus");

const taskTableBody=document.querySelector(".tasks-card tbody");


taskform.addEventListener("submit",function(event){
    event.preventDefault();

    const taskName=taskNameInput.value;
    const projectname=taskProjectInput.value;
    const date = taskDateInput.value;
    const priority = taskPriorityInput.value;
    const status = taskStatusInput.value;

    const newrow=document.createElement("tr");
    newrow.innerHTML=`
    <td>${taskName}</td>
    <td>${projectname}</td>
    <td>${date}</td>
    <td>${priority}</td>
    <td>${status}</td>`;

    taskTableBody.appendChild(newrow);
    taskModal.style.display="none";
    taskform.reset();

    console.log(taskName);
    console.log(projectname);
    console.log(date);
    console.log(priority);
    console.log(status);
});