const container = document.querySelector('.container')
const h1 = document.querySelector('#h1')
let restart = document.querySelector('.restart')
let emptyTiles = 9

let players = ["X","O"]
let random = Math.random()
let playerTurn = random > 0.5? players[0]: players[1]
let buttons = [[0,0,0],
               [0,0,0],
               [0,0,0]]
               
let underneath = [[0,0,0],
                  [0,0,0],
                  [0,0,0]]

let win = false
let tie = false
restart.onclick = ()=>{
    random = Math.random()
    playerTurn = random > 0.5? players[0]: players[1]
    win = false
    emptyTiles = 9

    for(let row =0; row<3;row++){
        for(let column =0; column <3; column++){
            buttons[row][column].style.color = "white"
            buttons[row][column].innerText = ""
            buttons[row][column].style.backgroundColor = "red"
            underneath[row][column] = 0
            buttons[row][column].disabled = false
        }
    }
}

for(let row = 0; row<3;row++){
    for(let column = 0; column<3; column++){
        let button = document.createElement('button')
        button.style.fontSize = "50px"
        button.style.color = "white"
        button.innerText = ""
        button.style.width = "100px"
        button.style.height = "100px"
        button.style.backgroundColor = 'red'
        button.style.border = "2px solid white"
        
        button.onmouseover = ()=>{
        button.style.backgroundColor = "brown"
        button.style.cursor = "pointer"
    }

        button.onmouseleave = ()=>{
            button.style.backgroundColor = 'red'
        }
        button.onclick = () =>{
            emptyTiles -=1
            button.innerText = playerTurn
            underneath[row][column] =  button.innerText
            if(playerTurn === players[0]){
                playerTurn = players[1]
            }
            else{
                playerTurn = players[0]
            }
            button.disabled = true
        }
    buttons[row][column] = button
    container.appendChild(buttons[row][column])
    }
}
    
function start(){
    h1.innerText = playerTurn+" Turn"
    checkWin()
    checkGameIsOver()
    requestAnimationFrame(start)
}
function checkWin(){
    
    for(let row =0; row < 3; row++){
        for(let column = 0; column < 3; column++){
                //HORIZONTAL CHECK
            if(underneath[row][0] === underneath[row][1] && underneath[row][1] === underneath[row][2] && underneath[row][2] !=0){
                buttons[row][0].style.backgroundColor = "green"
                buttons[row][1].style.backgroundColor = "green"
                buttons[row][2].style.backgroundColor = "green"
                h1.innerText = buttons[row][0].innerText+" WIN"
                 win = true
            }
                //VERTICAL CHECK
            else if(underneath[0][column] === underneath[1][column] && underneath[1][column] === underneath[2][column] && underneath[2][column] !=0){
                buttons[0][column].style.backgroundColor = "green"
                buttons[1][column].style.backgroundColor = "green"
                buttons[2][column].style.backgroundColor = "green"
                h1.innerText = buttons[0][column].innerText+" WIN"
                win = true

            }
                //DIAGONAL CHECK
            else if(underneath[0][0]===underneath[1][1] && underneath[1][1]=== underneath[2][2] && underneath[2][2] !=0){
                buttons[0][0].style.backgroundColor = "green"
                buttons[1][1].style.backgroundColor = "green"
                buttons[2][2].style.backgroundColor = "green"
                h1.innerText = buttons[0][0].innerText+" WIN"
                win = true
            }
            else if(underneath[0][2]===underneath[1][1] && underneath[1][1]=== underneath[2][0] && underneath[2][0] !=0){
                buttons[0][2].style.backgroundColor = "green"
                buttons[1][1].style.backgroundColor = "green"
                buttons[2][0].style.backgroundColor = "green"
                h1.innerText = buttons[0][2].innerText+" WIN"
                win = true
            }   
            else if(emptyTiles === 0 && win === false){
                h1.innerText = "Empate!"
                buttons[row][column].style.backgroundColor = "yellow"
                buttons[row][column].style.color = "black"
            }
        }
    }  
}
function checkGameIsOver(){
    for(let row = 0; row < 3; row+=1){
        for(let column = 0; column < 3; column++){
            if(win){
                buttons[row][column].disabled = true
            }
        }   
    }
}
start();

