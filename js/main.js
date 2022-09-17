import { Doing } from "./Doing.js";
import { DoList } from "./DoList.js";

let doList = new DoList();
document.querySelector("#addItem").onclick = () =>{
    
    let name = document.querySelector("#newTask").value;

    let doing = new Doing();
    doing.name=name;
    console.log(doing);

    doList.addDoing(doing);
    
    doList.setLocalStroge();
    console.log(doList);

    doList.renderDoingList("#todo");
}

window.DeleteItem = function(name) {
    console.log(name);
    doList.delete(name);
    
    doList.renderDoingList("#todo");

    doList.setLocalStroge();

}

window.UpdateItem = function(name) {
    console.log(name);
    doList.update(name);
    
    doList.renderDoingList("#todo");

    doList.setLocalStroge();

}


window.onload = function (){
    doList.getLocalStroge();
    console.log(doList);
    doList.renderDoingList("#todo");
}