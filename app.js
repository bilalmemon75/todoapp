var list = document.getElementById("list")


function add(){

var todo = document.getElementById("todo-item");

var li = document.createElement('li')
var liText = document.createTextNode(todo.value)
li.appendChild(liText)

var dltBtn = document.createElement("button")
var dltText = document.createTextNode("DELETE")

dltBtn.setAttribute("onclick","dltitem(this)")
dltBtn.appendChild(dltText)


var editButn = document.createElement("button")
var editText = document.createTextNode("EDIT")
editButn.appendChild(editText)
editButn.setAttribute("onclick","edtItem(this)")




li.appendChild(dltBtn)
li.appendChild(editButn)


list.appendChild(li)

todo.value = ""
}

function dltitem(e){

    e.parentNode.remove()

}

function dltall(){
  
    list.innerHTML = " "
}


function edtItem(e){

    
    var a = prompt("Enter Text");
    e.parentNode.firstChild.nodeValue = a ;


}