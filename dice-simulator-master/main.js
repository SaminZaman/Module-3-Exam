//Programming the Dice Game


//Global Variables
let funds = 5000

//Event Listeners
document.getElementById("play-btn").addEventListener("click", playGame);
document.getElementById("purchase-btn").addEventListener("click", buyGoods);

//Event Functions
function playGame () {
    //Take their bet
    let bet = Number(document.getElementById("bet-input").value);
    document.getElementById("house-die").src = "images/question-mark.png";
    //Can't bet money they don't have
    if (bet > funds) {
        bet = funds;
    }
        else if (bet < 0) {
            bet = 0;
        }


    //Generate House dice roll
    let houseRoll = Math.floor(6*(Math.random()) + 1);
    
    if (houseRoll == 1) {
        document.getElementById("house-die").src = "images/1.png";
    }
        else if (houseRoll == 2) {
        document.getElementById("house-die").src = "images/2.png";
        }    
        else if (houseRoll == 3) {
        document.getElementById("house-die").src = "images/3.png";
        }
        else if (houseRoll == 4) {
            document.getElementById("house-die").src = "images/4.png";
        }
        else if (houseRoll == 5) {
            document.getElementById("house-die").src = "images/5.png";
        }
        else if (houseRoll == 6) {
            document.getElementById("house-die").src = "images/6.png";
        }
        

    //Generate Player dice roll
    let playerRoll = Math.floor(6*(Math.random()) + 1);
    
    if (playerRoll == 1) {
        document.getElementById("player-die").src = "images/1.png";
    }
        else if (playerRoll == 2) {
        document.getElementById("player-die").src = "images/2.png";
        }    
        else if (playerRoll == 3) {
        document.getElementById("player-die").src = "images/3.png";
        }
        else if (playerRoll == 4) {
            document.getElementById("player-die").src = "images/4.png";
        }
        else if (playerRoll == 5) {
            document.getElementById("player-die").src = "images/5.png";
        }
        else if (playerRoll == 6) {
            document.getElementById("player-die").src = "images/6.png";
        }

    //Determine Win or Lose or Tie
    if (playerRoll > houseRoll) {
        funds = funds + bet;
        document.getElementById("funds").innerHTML = funds;
    }
        else if (playerRoll < houseRoll) {
        funds = funds - bet;
        document.getElementById("funds").innerHTML = funds;
        }

        else if (playerRoll == houseRoll){
            document.getElementById("funds").innerHTML = funds;
        }

    //Let them know if it's Game over
    if (funds == 0) {
        alert("Oh No! You lost all your money! You have nothing left to bet! Better luck next time!");
    }
}




function buyGoods () {
    
    //When below 1000, but above 0, as they need something to buy socks with
    if (funds < 1000 && funds > 0) {
        document.getElementById("loot").innerHTML += "<img src='images/socks.png'>";
        console.log(funds);
    }

        //When between 1000 and 5000
        else if (funds >=1000 && funds <= 5000) {
            let midLoot = Math.floor(3*(Math.random())+1);
            funds = funds - 1000;
            document.getElementById("funds").innerHTML = funds;
            if (midLoot == 1) {
                document.getElementById("loot").innerHTML += "<img src='images/bike.jpg'>";
            }
                else if (midLoot == 2) {
                    document.getElementById("loot").innerHTML += "<img src='images/ring.png'>";
                }
                else if (midLoot == 3) {
                    document.getElementById("loot").innerHTML += "<img src='images/trip.jpg'>";
                }
        }

        //When above 5000
        else if (funds > 5000) {
            let highLoot =  Math.floor(4*(Math.random())+1);
            funds = funds - 5000;
            document.getElementById("funds").innerHTML = funds;
            if (highLoot == 1) {
                document.getElementById("loot").innerHTML += "<img src='images/motorcycle.jpg'>";
            }
                else if (highLoot == 2) {
                    document.getElementById("loot").innerHTML += "<img src='images/house.png'>";
                }
                else if (highLoot == 3) {
                    document.getElementById("loot").innerHTML += "<img src='images/boat.png'>";
                }
                else if (highLoot == 4) {
                    document.getElementById("loot").innerHTML += "<img src='images/car.png'>";
                }
        }       
}
