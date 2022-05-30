const container = document.querySelector(".todo-container");
const button1 = document.getElementById("add");
const button2 = document.getElementById("remove");
const boxContainer = document.querySelector(".box-container");

button1.addEventListener("click", () => {
    var inputValue = document.querySelector("input").value; 
    var box = document.createElement("div");
    const randomNumber = `rgba(${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)})`
    if(inputValue == ""){
        alert("You have to add something");
    }   else{
        console.log(randomNumber);
        box.classList.add("box");
        box.innerHTML = inputValue;
        container.appendChild(box);
        let newBox = document.querySelector(".box");
        newBox.style.backgroundColor =`${randomNumber}`;
        document.querySelector("input").value =""  ;
    }
})

button2.addEventListener("click", () => {
   const box = document.querySelector(".box");
   box.remove();
   
    })



