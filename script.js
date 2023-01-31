const buttonEl = document.getElementById("liveToastBtn")
const listEl = document.querySelector("#list")
let liEl = document.querySelectorAll(".li-item")
let buttons = document.querySelectorAll(".cross-btn");


function newElement(){
    let inputValue = document.getElementById("task").value
    if(inputValue == false){
        $(document).ready(function(){
            $("#liveToast").toast("show");
          });
    }else{
        listEl.innerHTML += `<li class="li-item">${inputValue}<button class="cross-btn">X</button></li>`
        $(document).ready(function(){
            $("#liveToast1").toast("show");
          });
          let liEl = document.querySelectorAll(".li-item")
          let buttons = document.querySelectorAll(".cross-btn");
  

          liEl.forEach(mission => {
            mission.addEventListener("click", missionDone)
        })
        
        liEl.forEach(mission => {
            mission.addEventListener("dblclick", missionUndo)
        })
        buttons.forEach(mission => {
            mission.addEventListener("click", deleteTask)
        })
        document.getElementById("task").value = ""
        document.getElementById("task").placeholder = "Bugün ne yapacaksın?"
    }   
    
}

function missionDone(event){
    event.target.classList.add("li-item-done")
}

function deleteTask(){
    this.parentElement.remove()
}

function missionUndo(event){
    if(event.target.classList.contains("li-item-done")){
        event.target.classList.remove("li-item-done")
    }
}
    

buttons.forEach(mission => {
    mission.addEventListener("click", deleteTask)

})
// buttons.forEach(button => {
//     button.addEventListener("click", function() {
//         this.parentElement.remove();
//     });
// });

liEl.forEach(mission => {
    mission.addEventListener("click", missionDone)
})

liEl.forEach(mission => {
    mission.addEventListener("dblclick", missionUndo)
})

