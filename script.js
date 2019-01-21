var database = [
    {
        username: "John",
        password: "Doe"
    },
    {
        username: "foo",
        password: "bar"
    },
    {
        username: "Olayemi",
        password: "Roheem"
    }
];

var newsfeed = [
    {
        username: "Amazing",
        Timeline: "This is the best JavaScript course ever!"
    },
    {
        username: "Wondeful",
        Timeline: "How I wish I knew this beforehand"
    }
];

var userNamePrompt = prompt("Please enter your username!")

var passwordPrompt = prompt("Please enter your password!")

function signIn(user, pass) {
    if (userNamePrompt===database[0].username && passwordPrompt===database[0].password){
        console.log(newsfeed);
    } else (alert("You've enetered a wrong username and password"))
};

signIn(userNamePrompt, passwordPrompt);