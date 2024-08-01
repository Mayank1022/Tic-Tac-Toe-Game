
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let win = document.querySelector(".win");
let newbtn = document.querySelector(".new-btn");
let msg = documnet.querySelector("#msg");

let turnO = true;
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
        box.addEventListener("click",()=>{
         if(turnO)
         {
            box.innerText="O";
            turnO = false;
         }
         else{
            box.innerText="X";
            turnO= true;
         }
         box.disabled= true;
         checkWinner();
        })
})

const winner = (a) =>
    {
        msg.innerText = `Congratulations Winner is ${a}`;
        win.classList.remove("hide");
    }



function checkWinner() {
    for (let pattern of winPattern) {
        let a = boxes[pattern[0]].innerText;
        let b = boxes[pattern[1]].innerText;
        let c = boxes[pattern[2]].innerText;

        if (a != "" && b != "" && c != "") {
            if (a === b && b === c) {
                winner(a);
            }
        }
    }
}

