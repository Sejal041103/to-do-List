const input=document.getElementById("text");
const list=document.getElementById("list");
function add(){
  if(text.value==""){
    alert("write something");
  }
  else{
    let li=document.createElement("li");
    li.innerHTML=text.value;
    list.appendChild(li);
  let span=document.createElement("span");
  span.innerHTML="\u00d7";
  li.appendChild(span);
}
text.value="";
}
list.addEventListener("click",function(e){
  if(e.target.tagName ==="LI"){
    e.target.classList.toggle("check");
    save();
      }
      else if(e.target.tagName=="SPAN"){
          e.target.parentElement.remove();
save();
        }
      },false);
function save(){
  localStorage.setItem("data",list.innerHTML);
}
