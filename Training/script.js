console.log("World!"[5]);
console.log("ASAP".length)


let string = "Hello, World!";
console.log(string[string.length - 1]);

console.log(string[0] + string[1] + string[2] + string[3] + string[4]);



let str = null

console.log("---------------VARIABLES---------------");

let string_var = "Hello, Kier";

console.log(string_var);

let firstName = "Kier";
let age = 21;
let lastName = "Pascua";

grow = age + 1;

console.log("My name is " + firstName + " " + lastName + " and I am " + grow + " years old.");

// Const keyword

const point = 5;

console.log(point);

// Usd to Aud Converter

console.log("---------------USD to AUD CONVERTER---------------");

let usd = 1200;
let uad = 1.5;

total = usd * uad;

console.log(usd + " dollars is equal to " + total + " australian dollars.");

// Comparison
console.log("---------------COMPARISON---------------");


let a = 5 == 5;



console.log("Is a equal to 5? " + a);

// conditional statement
console.log("---------------CONDITIONAL STATEMENT--------------");

let member = false;
let signUp = true;

if (member === true) {
    console.log("Welcome back, member!");
}
else if (signUp === true) {
    console.log("Welcome to our website, new member!");
}
else {
    console.log("Please sign up to become a member.");
}


// Clubbing pass
console.log("---------------CLUBBING PASS---------------");

let ageClub = 17;

if (ageClub >= 18) {
    console.log("You are allowed to enter the club.");
}
else {
    console.log(`You are not allowed to enter the club, you are only ${ageClub} years old.`);
}


// logical operators

console.log("---------------LOGICAL OPERATORS---------------");

let age1 = 17;
let id = false;

if (age1 >= 18 && id === true) {
    console.log("You are allowed to enter the club.");
}
else if (age1 >= 18 && id === false) {
    console.log("You are allowed to enter the club, but you need to show your ID.");
}
else if (age1 < 18 && id === true) {
    console.log(`The fucK? you are ${age1} years old, bt you have an ID.`)
}
else if (age1 < 18 && id === false) {
    console.log(`Just no lmao`)
}




let Age_kier = 21;
let Gender_male = true;

let Iden = Age_kier === 21 && Gender_male ? "You are the Kier" : "you aint Kier lmao"

console.log(Iden);

// Exercise

let loggedIn = true
let hasMembership = true

let show = loggedIn && hasMembership ? `show video` : `don't show video`

console.log(show);


// Loops

let count = 1;


while (count <= 10) {
    console.log(count)
    count = count + 1;
}



let c = 1;

while (c <= 5) {
    if (c % 2 == 0) {
        console.log(`${c} is even number`);
        c = c + 1;
    }
    else {
        console.log(`${c} is odd number`);
        c = c + 1;
    }
}


for (let i = 0; i <= 10; i += 2) {
    console.log(i)

}

// Exercise

for (let i = 1; i <= 15; i++) {

    if (i % 2 == 0) {

        if (i % 5 == 0) {
            console.log(`${i} ASAP Frontend`);
        }
        else {
            console.log(`${i} Frontend`);
        }

    }
    else if (i % 5 == 0) {
        console.log(`${i} ASAP Frontend`);
    }
    else {
        console.log(`${i} ASAP`);
    }

}

// Exercise 2

let word = "ASAP Frontend";

w = word.length

for (let i = 0; i < w; i++) {
    console.log(word[i]);

}

// Functions

function greet(name) {
    console.log(`Hello ${name} welcome to the club!`);
}

greet("Mavi");

function calculate(a, b) {
    add = a + b;
    sub = a - b;
    mul = a * b;
    div = a / b;
    return `Addition: ${add}, Subtraction: ${sub}, Multiplication: ${mul}, Division: ${div}`;

}

console.log(calculate(5, 10));

// Exercise

function equal(a) {
    cal = a * 1.5;
    return `${a} dollars is equal to ${cal} australian dollars.`;
}

console.log(equal(1000));
console.log(equal(500));
console.log(equal(200));

// Array

let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

console.log(fruits[0]);
console.log(fruits[1]);

fruits.push("Fig");
console.log(fruits);

// Filter

let filter = fruits.filter((fruit) => {
    console.log(fruit);
    return true;
});

console.log(filter);



function sorting(n1, n2, n3, n4, n5) {

    figs = [n1, n2, n3, n4, n5];

    let sort = figs.filter((out) => {
        if (out > 500) {
            console.log(out);
            return true;
        }
        else {
            console.log(`${out} Not greater than 500`);
            return false;
        }

    });

}

console.log(sorting(400, 546, 684, 123, 423));
// ------------------------------------------
// Exercise

// function enter (p1, p2, p3, p4, p5) {

//     people = [p1, p2, p3, p4, p5];

//     let allowed = people.filter((person) => {
//         if (person >= 18) {
//             return true



//         }



//     });

//      console.log(allowed);


// }

// console.log(enter(18, 20, 16, 15, 21));
// console.log(enter(16, 17, 14, 15, 19));
// console.log(enter(20, 22, 26, 16, 20));


// Array + Looping

function enter(p1, p2, p3, p4, p5) {

    people = [p1, p2, p3, p4, p5];

    let adults = [];

    for (let i = 0; i < people.length; i++) {

        if (people[i] >= 18) {
            adults.push(people[i]);



        }




    }

    console.log(adults);





}

console.log(enter(18, 20, 16, 15, 21));
console.log(enter(16, 17, 14, 15, 19));
console.log(enter(20, 22, 26, 16, 20));


// // Exercise 2


// function cc(d1, d2, d3, d4) {

//     let r = [d1, d2, d3, d4];

//     let total = r.map(num => num = num * 1.5)

//     console.log(total);


// }

// console.log(cc(10, 20, 30, 40));
// console.log(cc(100, 150, 35));

// Exercise 3
// using for loop

function cc2(d1, d2, d3, d4) {

    let r = [d1, d2, d3, d4];

    let f = [];

    for (let i = 0; i < r.length; i++) {
        f.push(r[i] * 1.5);
    }

    console.log(f);

}

console.log(cc2(10, 20, 30, 40));
console.log(cc2(100, 150, 35));

// Objects

let user =  [
    {
    email: `example@gmail`,
    password: `123456`,
    name: `Kier`,
    discord: `example`,
    sub: `Pro`,
},
 {
    email: `exampl123e@gmail`,
    password: `kakaka`,
    name: `Mavi`,
    discord: `example`,
    sub: `Pro`,
},
 {
    email: `456@gmail`,
    password: `lalala`,
    name: `Gab`,
    discord: `example`,
    sub: `Pro`,
},
]


console.log(user[1].name);



// exercise

function signUpp (email, password, name, discord, sub, lessonsCompleted) {

    
 
    let newUser =  {
        email: email,
        password: password,
        name: name,
        discord: discord,
        sub: sub,
        lessonsCompleted: lessonsCompleted
    }

    // users = []

    // for(let i = 0; i < newUser.lenght; i++) {
    //     users.push(newUser[i])
    // }

    // console.log(users)

    console.log(newUser)


    
}

console.log(signUpp(`example@gmail`, `123456`, `Kier`, `example`, `Pro`, 5));

// DOM

// document.querySelector(`#head`).innerHTML = `ASAP Frontend`

// document.querySelector(`#head`).style.color = `red`; fontsize = `3px`

// console.log(document.getElementById(`head`));

function dark () {
    document.querySelector(`body`).classList.toggle(`dark`)

}


// change class names

function toggle (){
    document.querySelector('body').classList.toggle(`open`)
}

function change () {
    document.querySelector('#kier').innerHTML  = 'Kier Pascua'
    document.querySelector('#kier').style. color= 'blue' ; fontsize = '50px';
}



