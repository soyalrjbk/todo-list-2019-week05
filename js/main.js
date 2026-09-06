const checkboxes=document.querySelectorAll(".checkbox");
const text=document.querySelectorAll(".text");

for (let i=0; i<checkboxes.length; i++){
    checkboxes[i].addEventListener("change", function(){
       if(checkboxes[i].checked) {
        text[i].style.textDecoration="line-through";
       }
       else{
        text[i].style.textDecoration="none";
       }
    }
    );
}
const clearCompleted=document.querySelector(".clearCompleted");
clearCompleted.addEventListener("click", clearSelected);
function clearSelected(){
    for(let i=0; i<checkboxes.length; i++)
    {
       if (checkboxes[i].checked)
       {
        text[i].value="";
        text[i].style.textDecoration="none";
        checkboxes[i].checked=false;
       }
    }
}
const clearAll=document.querySelector(".clearAll");
clearAll.addEventListener("click", clearEverything);
function clearEverything(){
    for(let i=0; i<checkboxes.length; i++)
    {
        checkboxes[i].checked=false;
        text[i].value="";
        text[i].style.textDecoration="none";
    }
}