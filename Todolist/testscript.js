function addTask(){
    const taskInput=document.getElementById("taskInput");
    const taskTime=document.getElementById("taskTime");
    const taskText=taskInput.ariaValueMax.trim();
    const timeValue= taskTime.value ;
    
    if (taskText===""){
        alert("please enter a task");
        return ;
    }
    const taskList=document.getElementById("testList");
    const li=document.getElementById("li");
    const taskSpan=document.getElementById("span");
    taskSpan.textContent=taskText;
    const timeSpan =document.getElementById("span");
    timeSpan.classList.add("task-time");
    if(timeValue){
        timeSpan.textContent=`⏰ ${timeValue}`;
    }
    li.appendChild(taskSpan);
    li.appendChild(timeSpan);
    li.addEventListener("click",function(){
        li.classList.toggle("completed");
    });
    const deleteBtn=document.getElementById("button");
    deleteBtn.textContent="\/\/";
    deleteBtn.onclick=function(e){
        e.stopPropagation();
        taskList.removeChild(li);
    };
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value="";
    taskTime.value="";
}