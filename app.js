let boxes= document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");


let newGameBtn= document.querySelector("#new-btn");
let msg= document.querySelector("#msg");
let msgContainer= document.querySelector(".msg-container ");

let turn= true;//playerX,playerO
let count=0;
const winningArray=[
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],
    [2,5,8],[2,4,6],
    [3,4,5],
    [6,7,8]
]
const resetGame=()=>{
   turn=true;
   enableBtn();
   msgContainer.classList.add("hide");
   count=0;
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.textContent="O";
            turn=false
        }
        else{
            box.textContent="X";
            turn= true;
        }
        count++;
        console.log(count);
       
       box.disabled= true;
       checkWinner();
    });
});

const disableBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
     msg.innerText=`Congratulations winner is ${winner}`;
     msgContainer.classList.remove("hide");
     disableBtn();
}

const checkWinner=()=>{
    for(let pattern of winningArray){
        let pos1val =boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val){
       showWinner(pos1val);

            }
        }
         
    }
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
