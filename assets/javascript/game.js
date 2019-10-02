//VARIABLES===================================================


//* Notes 
// 1.)Some basic pseudo-code, so we need to create some variables, empty one to store the integers that are generated.
// 2.) We need to initialize the program, so basically rest or clear the program when we start or we start a new game. So we need a intialize function to reset game and when game page is loaded.
// 3.) We'll need to create some tags for the button, so we can refer to them for the on click event.
// 4.)Continue to write your pseudo-code as you were the user. You're sitting infront of the keyboard, what do you do,what are you pressing, what action does it take when you push the button. What happens when an action is already taken, what is the next step in the program. Review the calulator notes I took about each block of code as guidence and also refer back to psychic game for tips there too, as far as sequence. Essentially, it feels like we work backwards in when defining each block of code by starting if a variable is true, then set to false.
// 5.) Need a method to generate a random number for the numbers on the crystals and the random number that's spawned that we need to add up to.
// 6.) We need to assign those values to a the crystal buttons, so we need the .val() method  
// 7.)Try also too to not focus too much on creating every variable in the beginning, focus on getting one thing working.


$(document).ready(function () {

    var gameRandomNumber = 0;
    var userTotalScore = 0;
    var wins = 0;
    var loss = 0;
    //I can make more messages, like a greeting when I can understand how to do that and make it go away to start the game.
    //var gameStatus = ["You Win!", "You Lose, try again"];
    var crystalObsidian = 0;
    var crystalAmethyst = 0;
    var crystalTurquoise = 0;
    var crystalQuartz = 0;

    //FUNCTIONS========================================================
    //We're not clicking a button to generate random number, so this is not a click!

    function computerRandomNum(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;

    }
    //Used this for testing to make sure function worked and displayed random numbers
    //document.getElementById("computer-number").innerHTML = computerRandomNum(19, 120);
    //document.getElementById("amethyst").innerHTML = computerRandomNum(1,12);
    //document.getElementById("obsidian").innerHTML = computerRandomNum(1,12);
    //document.getElementById("turquoise").innerHTML = computerRandomNum(1,12);
    //document.getElementById("quartz").innerHTML = computerRandomNum (1,12);

    console.log(computerRandomNum(19, 120));



    function initializeCrystalGame() {

        gameRandomNumber = computerRandomNum(19, 120);
        userTotalScore = 0;
        crystalAmethyst = computerRandomNum(1, 12);
        crystalObsidian = computerRandomNum(1, 12);
        crystalTurquoise = computerRandomNum(1, 12);
        crystalQuartz = computerRandomNum(1, 12);

        //using the ID tag here with the .html we saw today.
        $("#user-score").html(userTotalScore);
        $("#computer-number").html(gameRandomNumber);

        console.log("Game Number: " + gameRandomNumber);
        console.log("-------------------------------");
        console.log("-------------------------------");
        console.log("Amethyst: " + crystalAmethyst);
        console.log("Obsidian: " + crystalObsidian);
        console.log("Turquoise: " + crystalTurquoise);
        console.log("Quartz: " + crystalQuartz);

        //So we need start new game with this initialize function, new computerRandomNumber, new random numbers for each one of the crystals, make sure the user score is set to 0.



        //$("#computer-number").on("click", function(){

        //computerRandomNumber = Math.floor(Math.random() * 120 + 19);


        //})

        //Need to create a random math function next?
        //Need to use the .hide() method to mask the numbers on each one of the crsytals.

        //for (var i = 1; i < 12; i++) {

        //    randomCrystalNumber = Math.floor(Math.random() * 12 + 1);

        //     crystalAmethyst = randomCrystalNumber + crystalAmethyst;
        //     //crystalObsidian = randomCrystalNumber + crystalObsidian;
        //     //crystalTurquoise = randomCrystalNumber + crystalTurquoise;
        //     //crystalQuartz = randomCrystalNumber + crystalQuartz;

        // }

        //document.getElementById("amethyst").innerHTML = crystalAmethyst;

    }


    //Trying to use this function to populate total score with crystals picked. Working, just had to remove var from userTotalScore since I'm not trying to redefine the variable.

    randomCrystalNumber = function () {
        userTotalScore += crystalAmethyst // + computerRandomNum(1,12);
        //userTotalScore += crystalObsidian

        $("#user-score").html(userTotalScore);
    }
    randomCrystalNumber();



    //So these are my on click functions for each one of the crystals. All working.

    $("#amethyst").on("click", function () {
        userTotalScore += parseInt(crystalAmethyst);
        $("#user-score").html(userTotalScore);

        if (userTotalScore > gameRandomNumber) {
            loss++;
            alert("You Lose, Try Again");
            $("#loser").val(loss);
    
            initializeCrystalGame();
        }
    
        else if (userTotalScore === gameRandomNumber) {
            wins++;
            alert("You Win!");
            $("#winner").val(wins);
    
    
            initializeCrystalGame();
    
        }
    });

    $("#obsidian").on("click", function () {
        userTotalScore += parseInt(crystalObsidian);
        $("#user-score").html(userTotalScore);
    });

    $("#turquoise").on("click", function () {
        userTotalScore += parseInt(crystalTurquoise);
        $("#user-score").html(userTotalScore);
    });

    $("#quartz").on("click", function () {
        userTotalScore += parseInt(crystalQuartz);
        $("#user-score").html(userTotalScore);
    });

    console.log("User Score " + userTotalScore);

    //gameStatus = function (word) {

    //}
    //gameStatus("You Win!!!");
    //gameStatus("You Lose, Try Again");

    //I'd like to this function gameStatus and use that to display win, lose inside my conditionals.



    //Start Conditionals - when I uncomment the conditional statements, the randomNumber

   

    

    //Need to initialze the start of a new game on a win or loss, so need to call the initializeCrystalGame function.


    //Need to initialize the start of a new game when user lands on page, so again, need to call the initializeCrystalGame function. DONE! :)

    initializeCrystalGame();


});