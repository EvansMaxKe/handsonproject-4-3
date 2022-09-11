window.addEventListener('load', function(){
    var form=document.getElementById("form");
    var input=document.getElementById("toolname");
    var tools=document.getElementById("list");
     
    form.addEventListener('submit', function(e){
        e.preventDefault();
        var textInput=input.value;
        if(!textInput){
            alert("NO TOOL ENTERED!");
            return;
        }
       else{
        var tool=document.createElement("li");
        tool.innerText=textInput;
        tools.appendChild(tool);
       }
    });
});

    