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
const clearButton=document.querySelector(".clearButton");
clearButton.addEventListener("click", clearAll);
function clearAll(){
    for(let i=0; i<checkboxes.length; i++)
    {
        checkboxes[i].checked=false;
        text[i].value="";
        text[i].style.textDecoration="none";
    }
}