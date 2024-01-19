var alt;
// for game logic
function myfunc() {
    var b1, b2, b3, b4, b5, b7, b8, b9;

    b1 = document.getElementById("b1").textContent;
    b2 = document.getElementById("b2").textContent;
    b3 = document.getElementById("b3").textContent;
    b4 = document.getElementById("b4").textContent;
    b5 = document.getElementById("b5").textContent;
    b6 = document.getElementById("b6").textContent;
    b7 = document.getElementById("b7").textContent;
    b8 = document.getElementById("b8").textContent;
    b9 = document.getElementById("b9").textContent;

    var btn1, btn2, btn3, btn4, btn5, btn7, btn8, btn9;

    btn1 = document.getElementById("b1");
    btn2 = document.getElementById("b2");
    btn3 = document.getElementById("b3");
    btn4 = document.getElementById("b4");
    btn5 = document.getElementById("b5");
    btn6 = document.getElementById("b6");
    btn7 = document.getElementById("b7");
    btn8 = document.getElementById("b8");
    btn9 = document.getElementById("b9");



        // for tie
        //i put this part before because even there was a winner it displayed tie 

        if ((b1 == 'X' || b1 == 'O') && (b2 == 'X'
        || b2 == 'O') && (b3 == 'X' || b3 == 'O') &&
        (b4 == 'X' || b4 == 'O') && (b5 == 'X' ||
            b5 == 'O') && (b6 == 'X' || b6 == 'O') &&
        (b7 == 'X' || b7 == 'O') && (b8 == 'X' ||
            b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
        document.getElementById('printwinner').innerHTML = "Match Tie";
    }

    //check the game if x
    // check first row
    if ((b1 == 'x' || b1 == 'X') && (b2 == 'X') && (b3 == 'X')) {
        document.getElementById('printwinner').innerHTML = "Player X won";

        //this is not working 
        //to disable the button after there is a winner
        btn4.disabled = false;
        btn5.disabled = false;
        btn6.disabled = false;
        btn7.disabled = false;
        btn8.disabled = true;
        btn9.disabled = true;

        //to print red on the row
        btn1.style.color = "red";
        btn2.style.color = "red";
        btn3.style.color = "red";
    }
    // check second row
    if ((b4 == 'X') && (b5 == 'X') && (b6 == 'X')) {
        document.getElementById('printwinner').innerHTML = "Player X won";
        document.getElementById("")

        btn4.style.color = "red";
        btn5.style.color = "red";
        btn6.style.color = "red";
    }
    // check third row
    if ((b7 == 'X') && (b8 == 'X') && (b9 == 'X')) {
        document.getElementById('printwinner').innerHTML = "Player X won";

        btn7.style.color = "red";
        btn8.style.color = "red";
        btn9.style.color = "red";
    }

    // check for first column

    if ((b1 == 'X') && (b4 == 'X') && (b7 == 'X')) {
        document.getElementById('printwinner').innerHTML = "Player X won";
        btn1.style.color = "red";
        btn4.style.color = "red";
        btn7.style.color = "red";

    }

    // check for second column

    if ((b2 == 'X') && (b5 == 'X') && (b8 == 'X')) {
        document.getElementById('printwinner').innerHTML = "Player X won";

        btn2.style.color = "red";
        btn5.style.color = "red";
        btn8.style.color = "red";
    }
    // check for third column

    if ((b3 == 'X') && (b6 == 'X') && (b9 == 'X')) {
        document.getElementById('printwinner').innerHTML = "Player X won";

        btn3.style.color = "red";
        btn6.style.color = "red";
        btn9.style.color = "red";
    }
    //diagonal check

    if ((b1 == "X") && (b5 == "X") && (b9 == "X")) {
        document.getElementById('printwinner').innerHTML = "Player X won";

        btn1.style.color = "red";
        btn5.style.color = "red";
        btn9.style.color = "red";
    }
    if ((b7 == "X") && (b5 == "X") && (b3 == "X")) {
        document.getElementById('printwinner').innerHTML = "Player X won";

        btn3.style.color = "red";
        btn7.style.color = "red";
        btn5.style.color = "red";
    }


    //check the game if O
    // check first row
    if ((b1 == 'o' || b1 == 'O') && (b2 == 'O') && (b3 == 'O')) {
        document.getElementById('printwinner').innerHTML = "Player O won";

        btn1.style.color = "red";
        btn2.style.color = "red";
        btn3.style.color = "red";

    }
    // check second row
    if ((b4 == 'O') && (b5 == 'O') && (b6 == 'O')) {
        document.getElementById('printwinner').innerHTML = "Player O won";

        btn4.style.color = "red";
        btn5.style.color = "red";
        btn6.style.color = "red";
    }
    // check third row
    if ((b7 == 'O') && (b8 == 'O') && (b9 == 'O')) {
        document.getElementById('printwinner').innerHTML = "Player O won";

        btn7.style.color = "red";
        btn8.style.color = "red";
        btn9.style.color = "red";

    }

    // check for first column

    if ((b1 == 'O') && (b4 == 'O') && (b7 == 'O')) {
        document.getElementById('printwinner').innerHTML = "Player O won";

        btn1.style.color = "red";
        btn4.style.color = "red";
        btn7.style.color = "red";

    }

    // check for second column

    if ((b2 == 'O') && (b5 == 'O') && (b8 == 'O')) {
        document.getElementById('printwinner').innerHTML = "Player O won";

        btn2.style.color = "red";
        btn5.style.color = "red";
        btn8.style.color = "red";
    }
    // check for third column

    if ((b3 == 'O') && (b6 == 'O') && (b9 == 'O')) {
        document.getElementById('printwinner').innerHTML = "Player O won";

        btn3.style.color = "red";
        btn6.style.color = "red";
        btn9.style.color = "red";
    }
    //diagonal check

    if ((b1 == "O") && (b5 == "O") && (b9 == "O")) {
        document.getElementById('printwinner').innerHTML = "Player O won";
        btn1.style.color = "red";
        btn5.style.color = "red";
        btn9.style.color = "red";

    }
    if ((b7 == "O") && (b5 == "O") && (b3 == "O")) {
        document.getElementById('printwinner').innerHTML = "Player O won";

        btn3.style.color = "red";
        btn7.style.color = "red";
        btn5.style.color = "red";
    }




    // TURN 
    if (flag === 1) {
        document.getElementById("printTurn").textContent = "X Turn"
    }
    else {
        document.getElementById("printTurn").textContent = "O Turn"

    }


}

// for restart 
function funcRES() {
    location.reload();
    // b1=b2=b3=b4=b5=b6=b7=b8=b9="";
}
var flag = 1;

// which turn and display X O
function func1() {
    if (flag === 1) {
        document.getElementById("b1").textContent = "X";
        document.getElementById("b1").disabled = true;
        flag = 0;

    }
    else {
        document.getElementById("b1").textContent = "O";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}
function func2() {
    if (flag === 1) {
        document.getElementById("b2").textContent = "X";
        document.getElementById("b2").disabled = true;
        flag = 0;

    }
    else {
        document.getElementById("b2").textContent = "O";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}
function func3() {
    if (flag === 1) {
        document.getElementById("b3").textContent = "X";
        document.getElementById("b3").disabled = true;
        flag = 0;

    }
    else {
        document.getElementById("b3").textContent = "O";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}
function func4() {
    if (flag === 1) {
        document.getElementById("b4").textContent = "X";
        document.getElementById("b4").disabled = true;
        flag = 0;

    }
    else {
        document.getElementById("b4").textContent = "O";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}
function func5() {
    if (flag === 1) {
        document.getElementById("b5").textContent = "X";
        document.getElementById("b5").disabled = true;
        flag = 0;

    }
    else {
        document.getElementById("b5").textContent = "O";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}
function func6() {
    if (flag === 1) {
        document.getElementById("b6").textContent = "X";
        document.getElementById("b6").disabled = true;
        flag = 0;

    }
    else {
        document.getElementById("b6").textContent = "O";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}
function func7() {
    if (flag === 1) {
        document.getElementById("b7").textContent = "X";
        document.getElementById("b7").disabled = true;
        flag = 0;

    }
    else {
        document.getElementById("b7").textContent = "O";
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}
function func8() {
    if (flag === 1) {
        document.getElementById("b8").textContent = "X";
        document.getElementById("b8").disabled = true;
        flag = 0;

    }
    else {
        document.getElementById("b8").textContent = "O";
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}
function func9() {
    if (flag === 1) {
        document.getElementById("b9").textContent = "X";
        document.getElementById("b9").disabled = true;
        flag = 0;

    }
    else {
        document.getElementById("b9").textContent = "O";
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}

