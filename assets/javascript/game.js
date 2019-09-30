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

    var computerRandomNumber = "";
    var userTotalScore = "";
    var wins = "";
    var loss = "";
    //I can make more messages, like a greeting when I can understand how to do that and make it go away to start the game.
    var gameStatus = ["You Win!", "You Lose, try again"];
    var crystalObsidian = "";
    var crystalAmethyst = "";
    var crystalTurquoise = "";
    var crystalQuartz = "";

    //We're not clicking a button to generate random number, so this is not a click!
    function computerRandomNum(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;

    }
    document.getElementById("#computer-number").innerHTML = computerRandomNum(19, 120);

    function initializeCrystalGame() {

        var computerRandomNumber = "";
        var userTotalScore = "";
        var crystalAmethyst = "";
        var crystalObsidian = "";
        var crystalTurquoise = "";
        var crystalQuartz = "";



        //$("#computer-number").on("click", function(){

        //computerRandomNumber = Math.floor(Math.random() * 120 + 19);


        //})

        //Need to create a random math function next?
        //Need to use the .hide() method to mask the numbers on each one of the crsytals.
        $("#amethyst").on("click", function () {


            for (var i = 1; i < 12; i++) {

                var randomCrystalNumber = Math.floor(Math.random() * 12 + 1);

                crystalAmethyst = randomCrystalNumber + crystalAmethyst;
                crystalObsidian = randomCrystalNumber + crystalObsidian;
                crystalTurquoise = randomCrystalNumber + crystalTurquoise;
                crystalQuartz = randomCrystalNumber + crystalQuartz;

            }
            $("#amethyst", "#obsidian", "#turquoise", "quartz").text();

        });
    }








    //Start Conditionals
    if (userTotalScore === computerRandomNumber) {
        wins++;
        gameStatus[0];
    }














    //Need to initialze the start of a new game on a win or loss, so need to call the initializeCrystalGame function.


    //Need to initialize the start of a new game when user lands on page, so again, need to call the initializeCrystalGame function. DONE! :)

    initializeCrystalGame();


});