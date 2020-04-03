//Things I learnt in this project
//js doesn't has 'pass by reference' option... If we want to pass it by ref then pass it as object like array, obj literal etc
//Used linear gradiant 
//Take care of var keyword.... If u didn't put it then it become a global var.. 
//pass anonymous functions to event listeners if they have arguments... 
//added enter feature to add

var todoList = [];

addId = document.getElementById("add");
todoId = document.getElementById("todo");
var completed = function(id, isCompleted){
    var idNum = document.getElementById(id);
    if(!isCompleted.value){
        console.log("complete"+ id);
        idNum.style.backgroundImage = "linear-gradient(to left,rgb(20, 215, 4 ),rgb(210, 244, 208 )";
    }
    else{
        idNum.style.backgroundImage = "linear-gradient(to left,rgb(247, 8, 8), rgb(241, 175, 175))";
    }
    isCompleted.value = !isCompleted.value;
    
}

var deleted = function(idn){
    var divn = document.getElementById(idn);
    console.log("when deleted"+idn);
    divn.remove();
}

var addEvent = function(){
    
    var isCompleted = {
        value:0
    };
    var todoValue = todoId.value;
    if(todoValue==""){
        alert("please enter something");
    }
    else{
        todoList.push(todoValue);
    var len = todoList.length;
    var listId = document.getElementById("List");
    
    var mainDiv = document.createElement("div");
    var divName = "maindiv"+len;                 //var keyword has to be putttttt otherwise it become global
    mainDiv.setAttribute("id",divName);
    
    var spanTag = document.createElement("span");
    var para = document.createElement("p");
    var idName = "ListItem"+len;
    para.setAttribute("class","Lists");  //added inline-block for it ..to made it come inline
    para.setAttribute("id",idName);
    var ptextNode = document.createTextNode(todoValue);
    para.appendChild(ptextNode);
    spanTag.appendChild(para);
    mainDiv.appendChild(spanTag);
    
    console.log("Evry time add clicked para "+idName);
    console.log("Every time add clicked whole div "+divName);

    var tick = document.createElement("button");
    var btextNode = document.createTextNode("✔️");
    tick.setAttribute("class","coptions");
    tick.appendChild(btextNode);
    mainDiv.appendChild(tick);
    

    var bin = document.createElement("button");
    var bintext = document.createTextNode("🗑️");
    bin.appendChild(bintext);
    bin.setAttribute("class","coptions");
    mainDiv.appendChild(bin);

    var brTag = document.createElement("br");
    mainDiv.appendChild(brTag);

    listId.appendChild(mainDiv);
    //if we write completed() function directly then it called without even clicked ... so used anonymous function
    tick.addEventListener("click", function(){
        completed(idName, isCompleted);
    });

    console.log("Every time add clicked whole div near event  "+divName); 
    bin.addEventListener("click",function(){
        deleted(divName);
    });

    //removing data in input field
    todoId.value = "";
    }
    
    
}

//adding listeners when we are in input field
todoId.addEventListener("keyup",function(event){
    if(event.keyCode == 13){
      event.preventDefault();
      addEvent();
}
});

addId.addEventListener("click", addEvent);