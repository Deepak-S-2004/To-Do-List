// const input=document.getElementById("input");
// const form=document.querySelector("form");
// const ullist=document.getElementById("list");
// const completedtasks=document.getElementById("completedtasks")

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     if(input.value!=""){
//         const list=document.createElement("li");
//         const edit=document.createElement("button");
//         const checkbox=document.createElement("input");
//         const del=document.createElement("button");
//         const complete=document.createElement("button");
//         const task=document.createElement("li");

//         checkbox.setAttribute("type","checkbox");
//         checkbox.setAttribute("class","check");

//         const tasktext=input.value;
//         list.textContent=tasktext;

//         edit.innerText="Edit";
//         edit.setAttribute("class","edit");
//         edit.addEventListener("click",(e)=>{
//             if(checkbox.checked){
//                 input.value = tasktext;
//                 list.remove();
//             }
//              else{
//                 alert("verify the checkbox");
//             }  
//         });

//         del.innerText="delete";
//         del.setAttribute("class","del");
//         del.addEventListener("click",(e)=>{
//             if(checkbox.checked){
//                 list.remove();
//                 edit.remove();
//                 del.remove();
//                 complete.remove();
//             }
//              else{
//                 alert("verify the checkbox");
//             }             
//         });
//         list.setAttribute("class","list");

//         task.setAttribute("class","comlist");

//         complete.innerText="completed";
//         complete.setAttribute("class","finished");
//         complete.addEventListener("click",(e)=>{
//             if(checkbox.checked){
//                task.textContent="✓"+tasktext;
//                task.style.listStyle="none";
//                completedtasks.appendChild(task);
//                list.remove();
//                edit.remove();
//                del.remove();
//                complete.remove();
//             }
//             else{
//                 alert("verify the checkbox");
//             }           
//         });

        
//         list.style.listStyle="none";
//         input.value="";

//         ullist.appendChild(list);
//         list.prepend(checkbox);
//         list.appendChild(edit);
//         list.appendChild(del);
//         list.appendChild(complete);
//     }
//     else{
//         alert("enter the input")
//     }
// });


// <!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//     <link rel="stylesheet" href="style.css" />
//     <link
//       href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
//       rel="stylesheet"
//       integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
//       crossorigin="anonymous"
//     />
//   </head>
//   <style></style>
//   <body class="bg-dark text-white">
//     <form action="">
//       <div id="container" class="container mt-5 p-5 col-12 col-md-6 bg-white text-dark">
//         <h1 class="text-primary">To-Do-List</h1>
//         <input
//           type="text"
//           name=""
//           id="input"
//           class="rounded-4 w-100 form-control border-3"
//         />
//         <button class="btn btn-primary rounded-4 mx-2 mt-3" type="submit">
//           Add Task
//         </button>
//         <div class="container">
//           <ul id="list"></ul>
//         </div>
//       </div>
//     </form>
//     <div id="completedcontainer" class="container mx-auto p-5">
//       <ul id="completedtasks"></ul>
//     </div>
//   </body>
//   <script src="script.js"></script>
// </html>