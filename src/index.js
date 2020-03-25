const usersURL = 'http://localhost:3000/users'

document.addEventListener("DOMContentLoaded", function() {
    const newPlayer = document.getElementById("createAccountButton")
    const oldPlayer = document.getElementById("signInButton")
    const signOut = document.getElementById('signOutButton')
    const newGame = document.getElementById('newGameButton')
    const oldGame = document.getElementById('oldGameButton')

    const bigLogo = document.getElementById('bigLogoDiv')

    
    newPlayer.addEventListener("click", function() {
        event.preventDefault()
        const contentBox = document.getElementById('bigbox')
        contentBox.className = "contentbox"
        const newUserForm = document.getElementById('newUserForm')
        bigLogo.hidden = true
        oldUserForm.hidden = true
        newUserForm.hidden = false
        newUserForm.addEventListener('submit', function(event){
            event.preventDefault()

            //use event attributes to create new user
            
            contentBox.className = "hiddencontentbox"
            newPlayer.hidden = true
            oldPlayer.hidden = true
            signOut.hidden = false
            newGame.hidden = false
            oldGame.hidden = false
            newUserForm.hidden = true
            bigLogo.hidden = false
        })
        createUser()
    })
  
    oldPlayer.addEventListener("click", function(event) {
        event.preventDefault()
        getUsers(event)
        const contentBox = document.getElementById('bigbox')
        const oldUserForm = document.getElementById('oldUserForm')
        contentBox.className = "contentbox"
        bigLogo.hidden = true
        newUserForm.hidden = true
        oldUserForm.hidden = false
        oldUserForm.addEventListener('submit', function(event){
            event.preventDefault()

            //use event attributes to find user and sign in
            
            contentBox.className = "hiddencontentbox"
            newPlayer.hidden = true
            oldPlayer.hidden = true
            signOut.hidden = false
            newGame.hidden = false
            oldGame.hidden = false
            newUserForm.hidden = true
            bigLogo.hidden = false
        })
        findUser(event)
    })
    signOut.addEventListener('click', function(event){
        event.preventDefault()

        newPlayer.hidden = false
        oldPlayer.hidden = false
        signOut.hidden = true
        newGame.hidden = true
        oldGame.hidden = true
        newUserForm.hidden = true
        bigLogo.hidden = false
    })
  })
  
  function createUser () {
    newUser = {name: "Testy McTesterson"}
    console.log("You're making a new player! Huzzah!")
    fetch(usersURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            newUser
        })      
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
        debugger;
    })
    .catch((error) => {
        alert ("OH FUCK");
        console.error('Error:', error)
    })
  }

  function getUsers (userId) {
    console.log(userId)
    console.log("You're finding old games!")
    //need to see what info we get back and set a variable to user_id
    fetch(usersURL)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
    })
    .catch((error) => {
        alert ("OH FUCK");
        console.error('Error:', error)
    })
  }

  function showGames (gameData) {
      console.log("this makes a ul that lists all of the user's games that you can click on to load that game")
      console.log
  }


//document.addEventListener("DOMContentLoaded", function() {
  console.log("hehe")
 
  
const fill= document.querySelector('.fill');
const empties= document.querySelectorAll('.empty');

//event listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
//loop through empties
//then run your function
for(const empty of empties) {
    empty.addEventListener('dragover', towerOver);
    empty.addEventListener('dragenter', towerEnter);
    empty.addEventListener('dragleave', towerLeave);
    empty.addEventListener('drop', towerDrop)
    
    }
function dragStart() {
    this.className += ' hold';

    setTimeout(()=>(this.className = 'invisible'), 0)
console.log('start')
}

function dragEnd() {
this.className = 'fill'
console.log('end')
}




function towerOver (e) {
    e.preventDefault();
console.log('over')
}
function towerEnter (e) {
    e.preventDefault();
    this.className += ' hovered';
    console.log('enter')
}
function towerLeave () {
    this.className += ' empty';
    console.log('leave')
}
function towerDrop () {
    this.className += ' empty';
    this.append(fill);
    console.log('drop')
}


//});
