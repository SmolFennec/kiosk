let users = ["jeff", "bob", "jim"]
let passes = ["123", "456", "789"]

function login(user, pass){
    for (let i = 0; i < users.length; i++) {
        if (users[i] == user) {
            if (passes[i] == pass) {
                console.log("sup cunt \n user:",user);
            }
            else{
                console.log("fuck off shitter");
            }
        }
    }
}