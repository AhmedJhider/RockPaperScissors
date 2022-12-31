let player_score = document.querySelector("#playerscore");
let pc_score = document.querySelector("#aiscore");
let game_winner = document.querySelector("h2");
let round = document.querySelector(".roundcount");
let pc_pick=[];
pc_pick[0]= document.querySelector(".container_play div:nth-child(1)");
pc_pick[1]= document.querySelector(".container_play div:nth-child(2)");
pc_pick[2]= document.querySelector(".container_play div:nth-child(3)");
let i = 0
function play(player){
    pc_pick[0].style.borderColor="transparent";
    pc_pick[1].style.borderColor="transparent";
    pc_pick[2].style.borderColor="transparent";
    let pc = Math.floor(Math.random() * 3);
    pc_pick[pc].style.borderWidth="4px";
    pc_pick[pc].style.borderStyle="solid";
    pc_pick[pc].style.borderColor="cyan";
    i = i+1;
    round.innerHTML = round.innerHTML.substring(0,6) + i;
    if(player == pc){
        game_winner.innerHTML = "TIE";
    } else if ((player < pc && pc != 2) || (player != 0 && player < pc)){
        player_score.innerHTML = parseInt(player_score.innerHTML) +1;
        game_winner.innerHTML = "YOU WIN";
    } else {
        pc_score.innerHTML = parseInt(pc_score.innerHTML) +1;
        game_winner.innerHTML = "YOU LOSE";
    }
}