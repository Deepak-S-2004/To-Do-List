const taskvalue=document.getElementById("task");
const todo=document.getElementById("todolist");
const ullist=document.getElementById("list");

todo.addEventListener("submit",(e)=>{
    e.preventDefault();
    const tasks=taskvalue.value.trim();
    if(tasks!=""){
        const list=document.createElement("li");
        const span=document.createElement("span");
        const divbox=document.createElement("div");
        const complete=document.createElement("button");
        const edit=document.createElement("button");
        const del=document.createElement("button");
        
        divbox.className="button-group"

        // button text content
        complete.innerText="Completed";
        edit.innerText="Edit";
        del.innerText="Delete";

        //   button class name
        span.className="wraptext";
        complete.className="comtask";
        edit.className="edittask";
        del.className="deltask";


        // list.textContent=tasks;
        span.innerText=tasks;
        taskvalue.value="";
        list.className="inputtasks";
        ullist.appendChild(list);
        list.appendChild(span);
        list.appendChild(divbox);
        divbox.appendChild(complete);
        divbox.appendChild(edit);
        divbox.appendChild(del);
        
        complete.addEventListener("click",(e)=>{
            span.classList.toggle("completed");
            // complete.innerText="undo";
            if( span.classList.contains("completed")){
                complete.innerText="undo";   
            }
            else{
                complete.innerText="completed"; 
            }

        });
        edit.addEventListener("click",(e)=>{
            taskvalue.value=tasks;
            list.remove();
        })
        del.addEventListener("click",(e)=>{
            list.remove();
        })
    }
});

