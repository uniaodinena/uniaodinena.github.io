function register(){

    var name = document.getElementById('name').value
    var email = document.getElementById('email').value

    if(!name) alert("Você precisa me dizer seu nome!")
    if(!email) alert("Você precisa me dizer seu e-mail!")

    var registerStatus = document.getElementById('registerStatus')
    var usernameText = document.getElementById('usernameText')
    var registerButton = document.getElementById('register')
    var email_warning = document.getElementById('email_warning')

    registerButton.hidden = true;

    registerStatus.innerHTML = 'Registrado(a) com sucesso!'
    usernameText.innerHTML = `${name}, valeu por sua inscrição! 💥`

    email_warning.hidden = false;

    document.body.style.background = 'url(https://media.giphy.com/media/MXQnyEQwBJ6eTj90L5/giphy.gif)'
}

function onSignIn(){
    var profile = googleUser.getBasicProfile();

    document.getElementById('bg-modal').style.display = 'none'

    var userName = document.getElementById('userName')

    userName.innerHTML = `Bem vindo(a)! ${profile.getName()}`
}