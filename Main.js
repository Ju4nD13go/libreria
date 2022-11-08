const Username = document.getElementById('Username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click',(e) =>{
    e.preventDefault()
    const data = {
        Username: Username.value, 
        password: password.value
    }

    console.log(data)
})