
// finding the hypotenuse (using basic math)

let a;
let b;
let c;
let total;
document.getElementById("submitButton").onclick = function() {
    
    a = document.getElementById("aTextBox").value;
    a = Number(a)

    b = document.getElementById("bTextBox").value;
    b = Number(b)

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    c = Math.round(c * 100)/100;
    c = document.getElementById("clabel").innerHTML = "Side C: " + c;
}

// Counter (using math)

let count = 0
document.getElementById("decrease").onclick = function() {
    count -= 1;
    document.getElementById("count").innerHTML = count;
}

document.getElementById("reset").onclick = function() {
    count = 0;
    document.getElementById("count").innerHTML = count;
}

document.getElementById("increase").onclick = function() {
    count += 1;
    document.getElementById("count").innerHTML = count;
}

//dice roll (using math methods)


document.getElementById("rollBtn").onclick =  function() {
    random1 = Math.floor(Math.random() * 6 + 1);
    document.getElementById("dice1").innerHTML = random1;

    random2 = Math.floor(Math.random() * 6 + 1);
    document.getElementById("dice2").innerHTML = random2;

    random3 = Math.floor(Math.random() * 6 + 1);
    document.getElementById("dice3").innerHTML = random3;

    let total = random1 + random2 + random3;

    document.getElementById("message").innerHTML = "Total roll:  " + total; 

}


// Personal info (using string methods)

let fullName;
let firstName;
let lastName;

fullName = document.getElementById("submit").onclick = function() {
    
    fullName = document.getElementById("userName").value;
    firstName = fullName.slice(0, fullName.indexOf(" "))
    lastName = fullName.slice(fullName.indexOf(" ") +1)

    document.getElementById("fName").innerHTML = "Your first name is: " + firstName;
    document.getElementById("lName").innerHTML = "Your last name is: " + lastName;
}

