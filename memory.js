let playground = document.getElementById("playground")
let time = document.getElementById("time")
let moves = document.getElementById("moves")
let cards = [
    "A", "A",
    "B", "B",
    "C", "C",
    "D", "D",
    "E", "E",
    "F", "F",
    "G", "G",
    "H", "H",
]

cards.sort( (a,b) => {
    let rnd = Math.random()-0.5
    return rnd
} )

function gameIsOver(){
    if(document.getElementsByClassName("good").length == cards.length){
        return true
    }
    return false
}


function startTimer(){
    let sec = 0
    let min = 0
    let timerInterval = setInterval(()=>{
        sec++

        if(sec>= 60){
            min++
            sec-=60
        }


        time.innerText = min + ':' + sec

        if(gameIsOver()){
            clearInterval(timerInterval)
        }
    },1000)
}

startTimer()




function addMove(){
    let num = moves.innerText * 1
    num++
    moves.innerText = num
}

function test(){
    let pickeds = document.getElementsByClassName("picked")
    pickeds = Array.from(pickeds)

    if(pickeds.length < 2){
        return 0;
    }else{
        setTimeout(()=>{
            if(pickeds[0].innerHTML === pickeds[1].innerHTML){
                pickeds[0].classList.add("good")
                pickeds[1].classList.add("good")
            }else{
                pickeds[0].innerHTML = ""
                pickeds[1].innerHTML = ""
            }
            pickeds[0].classList.remove("picked")
            pickeds[1].classList.remove("picked")
        },500)
        
    }

    
}

for(let i=0; i<16; i++){
    let card = document.createElement("div")
    card.classList.add("card")
    card.onclick = () => {
        if(document.getElementsByClassName("picked").length >= 2){
            return
        }

        if(card.classList.contains("picked") ||
        card.classList.contains("good")){
            return
        } 


        card.innerHTML = cards[i]
        card.classList.add("picked")
        addMove()
        test()
    }
    playground.appendChild(card)
}